interface PdfProps {
  filename: string;
  height: number;
}

const Pdf = ({ filename, height }: PdfProps) => {
  return (
    <iframe
      src={`/portfolio/${filename}`}
      width="100%"
      height={`${height}px`}
      className="rounded-b-md"
    />
  );
};

export default Pdf;
