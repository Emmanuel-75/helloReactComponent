export default function Greetings({users, children}) {
  return (
    <>
      {users.map((user, index) => (
        <div key={index} className='bg-olive-800 p-6 rounded-xl flex flex-col gap-4 hover:scale-105 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out'>
          <h2 className='font-bold text-3xl'>Hello {user}</h2>
          <p className='text-xl'>
            {children}
          </p>
        </div>
      ))}
    </>
  );
}