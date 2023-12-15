"use client";
import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";
import { Question } from ".";
import { AssessmentDTO, UserAssessmentDTO } from "./types";

type AssessmentProps = {
  className?: string;
  assessment: AssessmentDTO;
  currentQuestionIndex: number;
};

//teste
export function Assessment({ assessment, className, currentQuestionIndex }: AssessmentProps) {
  const { control } = useFormContext<UserAssessmentDTO>();

  return (
    <div className={clsx(className)}>
      {assessment.questions && assessment.questions.length > 0 && (
        <Controller
          key={assessment.questions[currentQuestionIndex].id}
          control={control}
          name={`answers.${currentQuestionIndex}`}
          render={({ field }) => <Question {...field} question={assessment.questions[currentQuestionIndex]} />}
        />
      )}
    </div>
  );
}
