import { hello } from "../../declarations/hello";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with hello actor, calling the greet method
  const greeting =  await hello.greeting(name);
  await hello.increment();
  const num =  await hello.get();

  console.log("what came from num",num)
  document.getElementById("greeting").innerText = greeting;
});
