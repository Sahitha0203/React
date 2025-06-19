<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="root"></h1>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script>
      const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React" (👀h1 is  not heading tag here , it is just the js object or react element)
);
(👀attributes are given in the flower brackets of object)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); (👀render converts the object h1 to heading tag and puts it in the place of heading, while displaying it.)

    </script>
  </body>
</html>
