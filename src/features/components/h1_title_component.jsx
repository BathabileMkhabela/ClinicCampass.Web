import '../../styles/admin_styles.css'
export default function H1titleComponent({title}){
    return(
        <div className='titlePage_container'>
          <h1>{title}</h1>
        </div>
    );
}