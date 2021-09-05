import { hello } from "../../../.dfx/local/canisters/hello";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with hello actor, calling the greet method
  const greeting =  await hello.greeting(name);
  // await hello.increment();
  // const num =  await hello.get();

  console.log("what came from num",greeting)
  document.getElementById("greeting").innerText = greeting;
});
