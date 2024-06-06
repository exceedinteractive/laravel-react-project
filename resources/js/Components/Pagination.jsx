import { Link } from "@inertiajs/react";

export default function Pagination ({links}) {
    return (
        <nav className="text-center mt-4">
        {links.map(link => (
                <Link
                preserveScroll 
                href={link.url || ""} 
                key={link.label}  
                className={
                    "inline-block py-2 px-3 rounded-lg text-gray-500 text-xs " + 
                    (link.active ? " bg-gray-900 text-white " : "") + 
                    (!link.url ? " !text-gray-500 cursor-not-allowed" : "hover:bg-gray-100")
                } dangerouslySetInnerHTML={{__html: link.label}}></Link>
            ))}
        </nav>
    )
}