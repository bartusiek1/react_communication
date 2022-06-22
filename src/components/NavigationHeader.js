import classes from "./NavigationHeader.module.css";

const NavigationHeader = () => {
    return (
            <div className={classes.PasekNawigacyjny}>
                <div className={classes.Lewa}>
                    <div className={classes.TextLewa}>
                        <p>Logo</p>
                    </div>
                    <div className={classes.TextLewa}>
                        <p>ARPPL4</p>
                    </div>
                </div>
                <div className={classes.Prawa}>
                    <div className={classes.TextPrawa}>
                        <p><button>Home</button></p>
                    </div>
                    <div className={classes.TextPrawa}>
                        <p><button>Lista</button></p>
                    </div>
                    <div className={classes.TextPrawa}>
                        <p><button>Formularz</button></p>
                    </div>
                    </div>
                </div>
    );
}

export default NavigationHeader;