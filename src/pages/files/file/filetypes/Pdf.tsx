interface PdfProps {
  filePath: string;
  height: number;
}

const Pdf = ({ filePath, height }: PdfProps) => {
  return (
    <iframe
      src={filePath}
      width="100%"
      height={`${height}px`}
      className="rounded-b-md"
    />
  );
};

export default Pdf;
