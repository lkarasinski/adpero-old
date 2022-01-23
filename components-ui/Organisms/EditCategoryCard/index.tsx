import Button from 'components-ui/Atoms/Button';
import DetailsCard from 'components-ui/Molecules/DetailsCard';
import EditDetailsCard from 'components-ui/Molecules/EditDetailsCard';
import InputField from 'components-ui/Molecules/InputField';
// import { Errors } from "components/EditJourney";
// import { addNewDetail } from "components/EditJourney/functions";
import React from 'react';
import { Expense, Journey } from 'utils/interfaces';

const addNewDetail = (a: any, b: any, c: any) => {};

type Props = {
    expense: Expense;
    values: Journey;
    setValues: (
        values: React.SetStateAction<Journey>,
        shouldValidate?: boolean | undefined
    ) => void;
    typedErrors: any;
    i: number;
};
const EditCategoryCard: React.FC<Props> = ({
    expense,
    values,
    setValues,
    typedErrors,
    i,
}) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    if (isExpanded) {
        return (
            <div>
                <button type="button" onClick={() => setIsExpanded(false)}>
                    Contract
                </button>
                <InputField
                    label="Category name"
                    name={`expenses[${i}].title`}
                    // TODO
                    error={''}
                />

                {expense.details.map((_, j: number) => (
                    <EditDetailsCard
                        key={`${i}-${j}`}
                        values={values}
                        IDs={[i, j]}
                        setValues={setValues}
                        errors={typedErrors}
                    />
                ))}

                <Button
                    onClick={() => addNewDetail(values, i, setValues)}
                    type="button"
                >
                    Add new detail
                </Button>
            </div>
        );
    }
    return (
        <div>
            <button type="button" onClick={() => setIsExpanded(true)}>
                Expand
            </button>
            <DetailsCard expense={expense} />
        </div>
    );
};

export default EditCategoryCard;
