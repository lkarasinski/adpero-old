import Heading from "components-ui/Atoms/Heading";
import LogInButton from "components/LogInButton";
import { motion } from "framer-motion";
import { withAuthUserTokenSSR, withAuthUser } from "next-firebase-auth";
import React from "react";

const Settings: React.FC = () => {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
        >
            <Heading>Settings</Heading>
            <LogInButton />
        </motion.div>
    );
};

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Settings);
