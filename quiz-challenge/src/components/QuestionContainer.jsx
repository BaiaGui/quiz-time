import { Children } from "react";

export function QuestionContainer({children}){
    return (
        <div className="flex flex-col items-center">
            <p className="my-16 text-2xl font-bold ">Quanto é 1+1? Justifique sua resposta</p>
            <div className="flex justify-center gap-10 mb-16 ">
                {children}
            </div>
        </div>
    );
}