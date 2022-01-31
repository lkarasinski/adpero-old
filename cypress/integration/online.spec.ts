/// <reference types="cypress"/>

context("Logged in user", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        // cy.restoreLocalStorage();
        cy.login();
    });

    afterEach(() => {
        // cy.saveLocalStorage();
    });

    after(() => {
        cy.logout();
    });

    it("should create new journey", () => {
        cy.findByRole("link", {
            name: /new journey/i,
        }).click();
        cy.url().should("include", "/new");
        cy.findByRole("textbox", {
            name: /journey name/i,
        })
            .clear()
            .type("cypress-testing-journey-to-be-renamed");
        cy.findByRole("textbox", {
            name: /day of departure/i,
        })
            .clear()
            .type("02/03/2022");
        cy.findByRole("textbox", {
            name: /day of return/i,
        })
            .clear()
            .type("02/05/2022");
        cy.findByRole("textbox", {
            name: /currency/i,
        })
            .clear()
            .type("USD");

        cy.findByRole("button", {
            name: /create/i,
        }).click();
        cy.url().should("include", "/journeys/");
    });

    it("should change name of the journey", () => {
        cy.findByRole("link", {
            name: /dashboard/i,
        }).click();
        cy.findByRole("link", {
            name: /cypress-testing-journey-to-be-renamed/i,
        }).click();
        cy.findByRole("link", {
            name: /edit/i,
        }).click();
        cy.findByRole("textbox", {
            name: /journey name/i,
        })
            .clear()
            .type(`cypress-testing-journey`);
        cy.findByRole("button", {
            name: /save/i,
        }).click();
        cy.findByRole("heading", {
            name: /edit journey: cypress-testing-journey/i,
        });
        cy.wait(3000);
    });

    it("should add category to the journey, and change it's title and details", () => {
        cy.findByRole("link", {
            name: /dashboard/i,
        }).click();
        cy.findByRole("link", {
            name: /cypress-testing-journey/i,
        }).click();
        cy.findByRole("link", {
            name: /edit/i,
        }).click();
        cy.findByRole("link", {
            name: /categories/i,
        }).click();
        cy.findByRole("heading", {
            name: /categories/i,
        }).should("be.visible");
        cy.findByRole("button", {
            name: /new category/i,
        }).click();
        cy.findByText(/new detail value/i)
            .should("be.visible")
            .click();
        cy.findByRole("textbox", {
            name: /title/i,
        })
            .clear()
            .type("cypress-expense-title");
        cy.findByText(/price/i).click();
        cy.findByRole("textbox", {
            name: /label/i,
        })
            .clear()
            .type("cypress-label");
        cy.findByRole("textbox", {
            name: /value/i,
        })
            .clear()
            .type("10");
        cy.findByRole("textbox", {
            name: /currency/i,
        })
            .clear()
            .type("GBP");
        cy.findByRole("button", {
            name: /submit changes/i,
        }).click();
        cy.findByRole("button", {
            name: /submit changes/i,
        }).should("be.disabled");
        cy.findByRole("button", {
            name: /submit changes/i,
        }).should("not.be.enabled");
        cy.findByRole("navigation").within(() => {
            cy.findByRole("link", {
                name: /cypress-expense-title/i,
            });
        });
        cy.findByRole("link", {
            name: /adpero/i,
        }).click();
        cy.url().should("eq", "http://localhost:3000/");
        cy.findByRole("link", {
            name: /cypress-expense-title/i,
        }).should("be.visible");
    });

    it("should create an invite", () => {
        cy.findByRole("link", {
            name: /cypress-testing-journey/i,
        }).click();
        cy.findByRole("link", {
            name: /edit/i,
        }).click();
        cy.findByRole("link", {
            name: /invite/i,
        }).click();
        cy.findByRole("button", {
            name: /create new link/i,
        })
            .should("not.be.disabled")
            .click();
        cy.findByRole("button", {
            name: /copy invite link/i,
        }).should("not.be.disabled");
    });

    it("should create a poll with an option and details", () => {
        cy.findByRole("link", {
            name: /cypress-testing-journey/i,
        }).click();
        cy.findByRole("link", {
            name: /edit/i,
        }).click();
        cy.url().should("include", "edit");
        cy.findByRole("link", {
            name: /polls/i,
        }).click();
        cy.url().should("include", "edit/polls");

        cy.findByRole("button", {
            name: /create new poll/i,
        }).click();

        cy.findByRole("main").within(() => {
            cy.findByRole("link", {
                name: /New Poll/,
            }).click();
        });
        cy.findByRole("textbox", {
            name: /poll label/i,
        })
            .clear()
            .type("cypress-poll-label");
        cy.findByRole("button", {
            name: /change poll label/i,
        })
            .should("not.be.disabled")
            .click();

        cy.findByRole("button", {
            name: /add new option/i,
        })
            .should("not.be.disabled")
            .click();

        cy.findByRole("heading", {
            name: /new category/i,
        }).click();

        cy.findByRole("textbox", {
            name: /title/i,
        })
            .clear()
            .type("cypress-poll-option-title");
        cy.findByText(/price/i).click();
        cy.findByRole("textbox", {
            name: /label/i,
        })
            .clear()
            .type("cypress-label");
        cy.findByRole("textbox", {
            name: /value/i,
        })
            .clear()
            .type("10");
        cy.findByRole("textbox", {
            name: /currency/i,
        })
            .clear()
            .type("GBP");
        cy.findByRole("button", {
            name: /submit changes/i,
        }).click();
        cy.findByText(/cypress-poll-option-title/).should("be.visible");
    });

    it("should vote for an option in a poll", () => {
        cy.findByRole("link", {
            name: /polls/i,
        }).click();

        cy.findByRole("link", {
            name: /cypress-poll-label/i,
        }).click();

        cy.wait(3000);

        cy.findByRole("heading", {
            name: /cypress-poll-option-title/i,
        }).click();
        cy.findByRole("button", {
            name: /vote for this option/i,
        }).click();
        cy.findByRole("button", {
            name: /You've voted for this option/i,
        }).should("be.visible");
        cy.wait(3000);
    });

    it("should delete the journey", () => {
        cy.findByRole("link", {
            name: /cypress-testing-journey/i,
        }).click();
        cy.findByRole("link", {
            name: /edit/i,
        }).click();
        cy.findByRole("button", {
            name: /delete journey/i,
        }).click();
        cy.url().should("eq", "http://localhost:3000/");
        cy.findByRole("link", {
            name: /cypress-testing-journey/i,
        }).should("not.exist");
    });
});

export {};
