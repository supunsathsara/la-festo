
import AccountNavBar from "@/components/AcountNavBar";


export default function AccountLayout({ children }) {
    return (

                <div className="text-slate-200">
                    <AccountNavBar />
                    {children}
                </div>
    );
}