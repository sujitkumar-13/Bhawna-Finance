import logo from "../assets/logo.png"
export const Logo = () => {
    return (
        <div className="items-center box-border  flex">
            <img
                alt="Bhawan Finance"
                src={logo}
                className="box-border  h-12 max-w-full"
            />
        </div>
    );
};
