export default function Post() {
    return (

        <div className="post">
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Arjun_MK1A_field_trials.jpg/450px-Arjun_MK1A_field_trials.jpg " alt="" ></img>
            </div>
            <div className="texts">
                <h2> Indian military battle tank </h2>
                <p className="Info">
                    <a className="author">Ananya</a>
                    <time> 2023-07-14 07:25</time>
                </p>
                <p className="summary"> The Arjun features a 120 mm rifled main gun with indigenously developed armour-piercing fin-stabilized discarding-sabot ammunition, one PKT 7.62 mm coaxial machine gun and a NSVT 12.7 mm machine gun</p>
            </div>
        </div>

    );
}