import ReactPDF, { Font } from "@react-pdf/renderer";
import Sample from "./Sample";

Font.register({
  family: "Birthstone",
  src: "./src/Birthstone-Regular.ttf",
});

Font.register({
  family: "Work Sans",
  src: "./src/WorkSans-Light.ttf",
});

ReactPDF.render(<Sample />, "./generated/example.pdf");
