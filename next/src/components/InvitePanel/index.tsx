import React from "react";
import useCreateInvite from "hooks/useCreateInvite";
import Text from "components-ui/Atoms/Text";

type Props = {
    userEmail: string;
    journeyID: string;
};

const InvitePanel: React.FC<Props> = ({ userEmail, journeyID }) => {
    const [linkID, createInvite] = useCreateInvite(userEmail, journeyID);
    const link = `${location.origin}/invite/${linkID}`;

    const copyToClipboard = () => navigator.clipboard.writeText(link);

    return (
        <div>
            {linkID ? (
                <button
                    onKeyDown={() => copyToClipboard()}
                    onClick={() => copyToClipboard()}
                >
                    <Text> {`${location.origin}/invite/${linkID}`}</Text>
                </button>
            ) : (
                ""
            )}

            <button onClick={() => createInvite()}>Create new link</button>
        </div>
    );
};

export default InvitePanel;
