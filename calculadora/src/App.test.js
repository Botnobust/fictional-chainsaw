import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza o título Login", () => {
  render(<App />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test("renderiza input de email", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
});

test("renderiza input de senha", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
});

test("renderiza botão acessar", () => {
  render(<App />);
  expect(screen.getByText(/acessar/i)).toBeInTheDocument();
});

test("não mostra mensagem de sucesso inicialmente", () => {
  render(<App />);
  expect(screen.queryByText(/sucesso/i)).toBeNull();
});