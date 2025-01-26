import Container from "@/components/Container";
import Archive from "@/components/documents/Archive";

const page = () => {
  return (
    <Container className="flex bg-background rounded-t-2xl -mt-2 h-dvh">
      <Archive />
    </Container>
  );
};

export default page;
