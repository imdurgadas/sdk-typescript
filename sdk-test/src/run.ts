import Typicode from "@durgadas/sdk-demo";

const client: Typicode = new Typicode({
  apiKey: "sdfd",
});

// client.getPosts().then((p) => {
//   console.log(p);
// });

client
  .createPost({
    title: "test",
    body: "test",
    userId: 1,
  })
  .then((p) => {
    console.log(`Created new post with id ${p.id}`);
  });
