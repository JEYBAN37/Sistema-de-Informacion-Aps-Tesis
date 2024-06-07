export interface ButtonProps {
    msg : string;
    msgTwo ?:string;
    prev?:any
    next?:any;
    fun ?: () => void; 
    funTwo ?: () =>void;
}