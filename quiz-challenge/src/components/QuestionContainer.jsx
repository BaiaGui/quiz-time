import { Children } from "react";

export function QuestionContainer({question, children}){
    return (
        <div className="flex flex-col items-center">
            <p className="my-16 text-2xl font-bold ">{question}</p>
            <div className="flex justify-center gap-10 mb-16 ">
                {children}
            </div>
        </div>
    );
}