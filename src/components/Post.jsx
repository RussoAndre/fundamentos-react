import styles from './Post.module.css';


export function Post(){
    return(
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} 
                    src="https://avatars.githubusercontent.com/u/101806622?v=4"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Danilo Gonçalves</strong>
                        <span>Jovem Aprendiz</span>
                    </div>
                </div>
                <time title='29 de agosto às 22:22' dateTime='2022/08/29 22:22:00'>Publicado há 1 hora</time>

            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 <a href='#'>jane.design/doctorcare</a></p>
            <p><a href='#'>#novoprojeto #nlw #rocketseat </a></p>
            </div>
            
        </article>
    );
}