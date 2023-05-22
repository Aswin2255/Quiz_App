import { shuffleArray } from "../utils/Utils"


export type Question = {
    category : string,
    question:string,
    correct_answer : string,
    difficulty:string,
    incorrect_answers:string[],
    type:string
} 
export type QuestionState = Question & {answer:string[]}   
export const fetchQuiz  = async (category:string,difficulty:string,) =>{
    try {
        const endpoint = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch (endpoint)).json();
    return data.results.map((questions:Question)=>{
        return (
            {
                ...questions,
                answer:shuffleArray([...questions.incorrect_answers,questions.correct_answer])
            
            }
        )
    })
        
    } catch (error) {
        console.log(error)
        
    }

}