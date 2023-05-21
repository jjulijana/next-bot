import { ReactNode } from "react";
import styles from "./MessagesContainer.module.css";

interface MessagesContainerProps {
    // children reserved (key) word
    children: ReactNode
}

export function MessagesContainer({children}: MessagesContainerProps) {
    return (
        // or <section className={"flex flex-col items-center py-2 px-4 overflow-auto" + styles.messages}>
        <section className={`flex flex-col items-center py-2 px-4 overflow-auto ${styles.messages}`}>
            {children}
        </section>
    )
}