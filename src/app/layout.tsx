
import "./globals.css";

type RootLayout ={
  name:"Zeeshan Haider"
  children: React.ReactNode;
};
const RootLayout: React.FC<RootLayout> = (props) => {
console.log(props, "props")
  return (
    <html lang="en">
      <head></head>
      <body>
        {props.children}
      </body>
    </html>
  );
};
export default RootLayout;