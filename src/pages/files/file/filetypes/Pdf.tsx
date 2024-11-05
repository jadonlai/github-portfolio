interface PdfProps {
  filepath: string;
  height: number;
}

const Pdf = ({ filepath, height }: PdfProps) => {
  return (
    <iframe
      src={`${filepath}#toolbar=0`}
      width="100%"
      height={`${height}px`}
      className="overflow-hidden rounded-b-md"
    />
  );
};

export default Pdf;
