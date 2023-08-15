function Home(){
    return(
        <>
            <div className="w-full h-96 bg-no-repeat bg-center bg-cover bg-fixed grayscale bg-[url('https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                <div className="w-full h-full backdrop-blur-sm flex flex-col justify-center items-center gap-4">
                    <h1 className="font-TiltPrism text-center text-[10rem]">BlogVerse</h1>
                    <p className="font-DancingScript text-center text-[2rem] text-white">"Where Words Take Flight and Stories Find Home."</p>
                </div>
            </div>
            <div className="w-1/2 m-auto text-[1.3rem] mt-12 text-justify">Welcome to BlogVerse – a platform for bloggers to share their thoughts, ideas, and stories with the world. Whether you're an experienced writer or just getting started, our user-friendly interface allows you to effortlessly create and share your blog posts. Join our community of passionate individuals and explore a diverse range of topics, from travel and technology to lifestyle and personal experiences. Start reading and writing today!</div>
            
        </>
    )
}
export default Home;