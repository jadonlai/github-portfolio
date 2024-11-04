interface PdfProps {
  filename: string;
  height: number;
}

const Pdf = ({ filename, height }: PdfProps) => {
  return (
    <iframe
      src={`/portfolio/${filename}#toolbar=0`}
      width="100%"
      height={`${height}px`}
      className="overflow-hidden rounded-b-md"
    />
  );
};

export default Pdf;
