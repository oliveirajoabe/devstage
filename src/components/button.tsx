import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode; // não precisa passar aqui na interface, nativamente ja é esperado o children no html
}
export function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props} // o children é passado como props para o botão
    />
  );
}
