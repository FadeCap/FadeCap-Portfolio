const Welcome = () => {
  return (
    <div className="flex flex-col items-center text-center py-8">
      <p className="max-w-xl text-lg font-bold">
        Hello! <br />
        My name is Stian and I'm a Front End developer. If you scroll down, you can see some projects I have done. Thank you for taking the time to look through my portfolio!
      </p>
      <img className="rounded-full w-48 h-48 object-cover mt-4" src="/assets/my-image.png" alt="A picture of me (Stian)" />
    </div>
  );
};

export default Welcome;
