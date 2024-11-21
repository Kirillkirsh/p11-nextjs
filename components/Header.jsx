import Link from "next/link";
import classes from './Header.module.css';

const pages = [
    {href:'/', title:'Home'},
    {href:'/info', title:'Info'},
    {href:'/like-demo', title:'ToDo List'},
    {href:'/todopage', title:"2nd todo"},
    {href: '/calendar', title: 'Calendar'},
    {href:'/jsph', title:'JSPH'},
    {href:'/exam-page', title:'EXAM'}
]
export function Header(){
    console.log('classes = ', classes);
    return<header>
        <nav className={classes.header}>
            <ul>
                {pages.map(({href, title}) => <li key={href}>
                    <Link href={href}>{title}</Link>
                </li>)}
                
            </ul>
        </nav>
    </header>
}