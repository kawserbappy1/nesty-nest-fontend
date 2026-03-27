import MyButton from "../components/shared/MyButton";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-2 ">
        <MyButton to="/" className="bg-secondary">
          click here
        </MyButton>
      </div>
    </>
  );
};

export default Home;
