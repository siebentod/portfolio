import {
  TextApoliteia,
  TextExtracts,
  TextNivritti,
  TextRigveda,
  TextBirzha,
  TextPDF,
  AboutMe,
} from './Texts';

let url;
let Text;

function ModalText({ openedModal, closeModal }) {
  switch (openedModal) {
    case 'apoliteia':
      url = 'https://apoliteia.ru/';
      Text = TextApoliteia;
      break;
    case 'nivritti':
      url = 'https://nivritti.vercel.app/';
      Text = TextNivritti;
      break;
    case 'extracts':
      url = 'https://philosophy-extracts.vercel.app/';
      Text = TextExtracts;
      break;
    case 'rigveda':
      url = 'https://rigveda-hymns.vercel.app/';
      Text = TextRigveda;
      break;
    case 'birzha':
      url = 'https://birzha.vercel.app/';
      Text = TextBirzha;
      break;
    case 'pdf':
      url = 'https://clean-copy-from-pdf.vercel.app/';
      Text = TextPDF;
      break;
    case 'aboutme':
      Text = AboutMe;
      break;
    default:
    // code block
  }

  return (
    <>
      <div className="bg-[#242424] p-5 rounded-lg shadow-lg max-w-lg w-full grid justify-center items-center z-10 animate-slide-up">
        <Text url={url} closeModal={closeModal} />
      </div>
    </>
  );
}

export default ModalText;
