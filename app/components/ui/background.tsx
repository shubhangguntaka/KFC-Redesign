export default function Background() {
    return (
        <div className="fixed inset-0 z-0 bg-white">
            <div className="absolute inset-0 flex justify-center">
                <div className="w-[100px] bg-[#E4002B]" />
                <div className="w-[50px] bg-white" />
                <div className="w-[100px] bg-[#E4002B]" />
                <div className="w-[50px] bg-white" />
                <div className="w-[100px] bg-[#E4002B]" />
            </div>
        </div>
    );
}
