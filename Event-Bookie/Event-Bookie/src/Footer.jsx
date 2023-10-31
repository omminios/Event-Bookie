import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

function Footer(){
    return(
        <footer>
           <div className = "flex justify-center items-center bg-orange-400 text-white py-4 px-7 text-lg w-full pt-14">
           <div> Copyright {new Date().getFullYear()} © Event Bookie</div>
           </div>
        </footer>
    );
}

export default Footer