export interface ButtonProps {
    msg : string;
    msgTwo ?:string;
    prev?:any
    next?:string;
    fun ?: () => void; 
    funTwo ?: () =>void;
}