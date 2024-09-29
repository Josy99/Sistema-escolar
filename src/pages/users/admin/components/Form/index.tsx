import { useForm } from "react-hook-form";
import { FormContainer, FormContent } from "./style";
import * as zod  from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import { api } from "../../../../../lib/api";
import { useEffect } from "react";

export const zodSchema  = zod.object({
  nome: zod.string(),
  idade:  zod.number(),
  classe: zod.string(),
  sala: zod.string(),
  encarregado:  zod.string()
})

type  TypeZodSchemaProps = zod.infer<typeof  zodSchema>

export function FormUser({onAction, title, textButton}:any){

  const {id} =  useParams() 

  const  {handleSubmit,  register, reset} =  useForm<TypeZodSchemaProps>({
    resolver:  zodResolver(zodSchema)
  })

  async function  getDataUpdate() {
      const response =  await  api.get(`/dataBase/${id}`)
      reset(response.data)
  }

  useEffect(() => {
    getDataUpdate()
  }, [])

  return  (
    <FormContainer>
          <h2>{title}</h2>
         <FormContent onSubmit={handleSubmit(onAction)}>
              <input
               type="text" 
               placeholder="Nome"
               {...register("nome")}
               />
              <input
               type="number"
                placeholder="Idade"
                {...register('idade', {valueAsNumber: true})}
                />
              <input
               type="text" 
               placeholder="Classe"
               {...register("classe")}
               />
              <input 
              type="text" 
              placeholder="Sala"
              {...register("sala")}
               />
              <input 
              type="text"
              placeholder="Nome do/a Engarregado/a "
              {...register("encarregado")}
              />
              <button>{textButton}</button>
         </FormContent>
    </FormContainer>
  )
}