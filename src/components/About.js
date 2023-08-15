function About () {
    return(
        <>
             <div className="w-full h-96 bg-no-repeat bg-center bg-cover bg-fixed grayscale bg-[url('https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png')]">
                <div className="w-full h-full backdrop-blur-sm flex flex-col justify-start items-center">
                    <h1 className="font-serif text-center text-[6rem] text-white m-14">About</h1>
                </div>
            </div>
            <div className="bg-white h-64 w-3/4 m-auto relative bottom-28 shadow-md flex items-center">
                <p className="text-[1.3rem] px-7 text-justify">At BlogVerse, I'm a dedicated individual who believes in the power of words. My mission is to provide a space where voices can be heard and stories can be shared. With a simple focus on creating and viewing posts, I've designed this platform to be intuitive and straightforward, ensuring that your writing takes center stage. I value creativity, authenticity, and the connections that form through shared experiences. Join me on this journey of self-expression and discovery. Together, let's inspire and be inspired through the art of blogging.</p>
            </div>
        </>
    )
}
export default About;