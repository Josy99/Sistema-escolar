import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/api";

interface  Student{
  "id": number,
  "nome": string,
  "idade": number,
  "classe": string,
  "sala":  string,
  "encarregado": string

}

interface  AddStudent{
  "nome": string,
  "idade": number,
  "classe": string,
  "sala":  string,
  "encarregado": string
}

interface  handleUpdateProps{
  "id":  number,
  "nome": string,
  "idade": number,
  "classe": string,
  "sala":  string,
  "encarregado": string
}


interface  StudentContextTypes {
  student:  Student[],
  getDataStudant:  (query?: string) =>  Promise<void>;
  addStudent:  (data: AddStudent)=>  Promise<void>;
  deleteStudent:  (id: number)=> Promise<void>;
  handleUpdate: (data: handleUpdateProps)=>  Promise<void>;
} 

interface TransationProviderProps  {
  children : ReactNode;
}

export const  StudentContext  =  createContext({} as StudentContextTypes ) 

export function StudentProvider ({children}: TransationProviderProps) {
    const [student, setStudent]  =  useState<Student[]>([]); 
  
    async function  getDataStudant(query?:  string) {
      const  response = await api.get("/dataBase", {
        params: {
          _sort: "createdAt",
          _order: "desc", 
          q: query,
      }});
      setStudent(response.data)
    }

    async function addStudent(data: AddStudent) {
         const {nome, idade, classe, sala , encarregado} =  data
        const response  =  await  api.post("/dataBase", {
          nome, 
          idade,
          classe,
          sala,
          encarregado
        })
        setStudent((state)  =>  [response.data, ...state])
    }
      
    async function deleteStudent(id: number) {
      setStudent(student.filter((student) => student.id !== id))
       await  api.delete(`/dataBase/${id}`)
    }
    
    async function  handleUpdate(data:handleUpdateProps) {

      const  { nome, idade, classe, sala, encarregado} =  data

      const  response = await api.put(`/dataBase`, {
      nome, idade, classe, sala, encarregado
      })

      setStudent((state)  =>  [response.data, ...state])

    }

    useEffect(() => {
      getDataStudant()
  }, [])

    return (  
  <StudentContext.Provider value= {{student, getDataStudant, addStudent, deleteStudent, handleUpdate}}>
                {children}
         </StudentContext.Provider>
    )
} 