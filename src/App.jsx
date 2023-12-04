import PDF from "./components/PDF";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div>
      <PDFDownloadLink document={<PDF />} fileName="myfirstpdf.pdf">
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Loading Document ...</button>
          ) : (
            <button>Download now!</button>
          )
        }
      </PDFDownloadLink>

      <PDFViewer>
        <PDF />
      </PDFViewer>
    </div>
  );
}

export default App;
