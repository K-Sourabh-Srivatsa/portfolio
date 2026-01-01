const MyBioSection = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Contact Details</h1>
        <section className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-10 border border-white/20 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <ul className="list-none pl-0 space-y-4 text-white/90 break-words">
              <li className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <span className="font-bold">My Bio </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <span className="font-bold">My Degree </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyBioSection;
