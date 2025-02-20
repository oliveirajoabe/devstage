Criado com `npx create-next-app@latest --empty`

[Figma do Pojeto](<https://www.figma.com/design/zCFvQlb8QCHTXIVlXnjQdX/NLW-Connect-%E2%80%A2-DevStage-(Community)?node-id=3-376&p=f&t=0vAdhLpVmtPYEZMg-0>)

-   `npm install` ou `yarn install`
-   `npm run dev` ou `yarn dev`

---

node: v20.18.3 <br>
npm: v10.8.2 <br>
yarn: v1.22.22 <br>
next: v15.1.7 <br>

---

```javascript
interface InputProps extends ComponentProps<"input"> {
    error?: boolean;
}
export function Input({ error = false, ...props }: InputProps) {
    return (
        // group para criar um group, focus within para quando um elemento dentro do group estiver com foco
        <div
            data-error={error} // data atributes
            className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
        >
            {/*
        - o group do span estiver com focus within, vou querer que o meu span tenha text gray 100 ;
        - para manter a cor do icone de outra cor quando o elemento input for preenchido, no css temos o  placeholder-shown que
       é estilização para quando o placeholder esta visivel, o que temos que fazer é negar isso usando not e has(não e tem), fazemos
       isso dentro do group, a letra & siginifica que estamos referenciando o proprio elemento(div);
      */}
            <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger">
                <Mail />
            </span>
            <input
                className="flex-1 outline-0 placeholder-gray-400"
                {...props}
            />
        </div>
    );
}
```
