import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {withTheme} from "@yosmy/style";
import {Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {SecondaryButton, TertiaryButton} from "./Button";
import {Text} from "./Text";
import BufferList from "./BufferList";
import Input from "./Input";
import {FormIcon} from "./Icon";
import Modal from "./Modal";
import Container from "./Container";
import Flag from "./Flag";

const names = {"AF":"Afganist\u00e1n","AL":"Albania","DE":"Alemania","AD":"Andorra","AO":"Angola","AI":"Anguila","AQ":"Ant\u00e1rtida","AG":"Antigua y Barbuda","SA":"Arabia Saud\u00ed","DZ":"Argelia","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaiy\u00e1n","BS":"Bahamas","BD":"Banglad\u00e9s","BB":"Barbados","BH":"Bar\u00e9in","BE":"B\u00e9lgica","BZ":"Belice","BJ":"Ben\u00edn","BM":"Bermudas","BY":"Bielorrusia","BO":"Bolivia","BA":"Bosnia y Herzegovina","BW":"Botsuana","BR":"Brasil","BN":"Brun\u00e9i","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","BT":"But\u00e1n","CV":"Cabo Verde","KH":"Camboya","CM":"Camer\u00fan","CA":"Canad\u00e1","BQ":"Caribe neerland\u00e9s","QA":"Catar","TD":"Chad","CZ":"Chequia","CL":"Chile","CN":"China","CY":"Chipre","VA":"Ciudad del Vaticano","CO":"Colombia","KM":"Comoras","CG":"Congo","KP":"Corea del Norte","KR":"Corea del Sur","CR":"Costa Rica","CI":"C\u00f4te d\u2019Ivoire","HR":"Croacia","CU":"Cuba","CW":"Curazao","DK":"Dinamarca","DM":"Dominica","EC":"Ecuador","EG":"Egipto","SV":"El Salvador","AE":"Emiratos \u00c1rabes Unidos","ER":"Eritrea","SK":"Eslovaquia","SI":"Eslovenia","ES":"Espa\u00f1a","US":"Estados Unidos","EE":"Estonia","SZ":"Esuatini","ET":"Etiop\u00eda","PH":"Filipinas","FI":"Finlandia","FJ":"Fiyi","FR":"Francia","GA":"Gab\u00f3n","GM":"Gambia","GE":"Georgia","GH":"Ghana","GI":"Gibraltar","GD":"Granada","GR":"Grecia","GL":"Groenlandia","GP":"Guadalupe","GU":"Guam","GT":"Guatemala","GF":"Guayana Francesa","GG":"Guernsey","GN":"Guinea","GQ":"Guinea Ecuatorial","GW":"Guinea-Bis\u00e1u","GY":"Guyana","HT":"Hait\u00ed","HN":"Honduras","HU":"Hungr\u00eda","IN":"India","ID":"Indonesia","IQ":"Irak","IR":"Ir\u00e1n","IE":"Irlanda","IM":"Isla de Man","CX":"Isla de Navidad","NF":"Isla Norfolk","IS":"Islandia","AX":"Islas \u00c5land","KY":"Islas Caim\u00e1n","CC":"Islas Cocos","CK":"Islas Cook","FO":"Islas Feroe","GS":"Islas Georgia del Sur y Sandwich del Sur","FK":"Islas Malvinas","MP":"Islas Marianas del Norte","MH":"Islas Marshall","UM":"Islas menores alejadas de EE. UU.","PN":"Islas Pitcairn","SB":"Islas Salom\u00f3n","TC":"Islas Turcas y Caicos","VG":"Islas V\u00edrgenes Brit\u00e1nicas","VI":"Islas V\u00edrgenes de EE. UU.","IL":"Israel","IT":"Italia","JM":"Jamaica","JP":"Jap\u00f3n","JE":"Jersey","JO":"Jordania","KZ":"Kazajist\u00e1n","KE":"Kenia","KG":"Kirguist\u00e1n","KI":"Kiribati","KW":"Kuwait","LA":"Laos","LV":"Letonia","LB":"L\u00edbano","LR":"Liberia","LY":"Libia","LI":"Liechtenstein","LT":"Lituania","LU":"Luxemburgo","MK":"Macedonia","MG":"Madagascar","MY":"Malasia","MW":"Malaui","MV":"Maldivas","ML":"Mali","MT":"Malta","MA":"Marruecos","MQ":"Martinica","MU":"Mauricio","MR":"Mauritania","YT":"Mayotte","MX":"M\u00e9xico","FM":"Micronesia","MD":"Moldavia","MC":"M\u00f3naco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MZ":"Mozambique","MM":"Myanmar (Birmania)","NA":"Namibia","NR":"Nauru","NP":"Nepal","NI":"Nicaragua","NE":"N\u00edger","NG":"Nigeria","NU":"Niue","NO":"Noruega","NC":"Nueva Caledonia","NZ":"Nueva Zelanda","OM":"Om\u00e1n","NL":"Pa\u00edses Bajos","PK":"Pakist\u00e1n","PW":"Palaos","PA":"Panam\u00e1","PG":"Pap\u00faa Nueva Guinea","PY":"Paraguay","PE":"Per\u00fa","PF":"Polinesia Francesa","PL":"Polonia","PT":"Portugal","PR":"Puerto Rico","HK":"RAE de Hong Kong (China)","MO":"RAE de Macao (China)","GB":"Reino Unido","CF":"Rep\u00fablica Centroafricana","CD":"Rep\u00fablica Democr\u00e1tica del Congo","DO":"Rep\u00fablica Dominicana","RE":"Reuni\u00f3n","RW":"Ruanda","RO":"Ruman\u00eda","RU":"Rusia","EH":"S\u00e1hara Occidental","WS":"Samoa","AS":"Samoa Americana","BL":"San Bartolom\u00e9","KN":"San Crist\u00f3bal y Nieves","SM":"San Marino","MF":"San Mart\u00edn","PM":"San Pedro y Miquel\u00f3n","VC":"San Vicente y las Granadinas","SH":"Santa Elena","LC":"Santa Luc\u00eda","ST":"Santo Tom\u00e9 y Pr\u00edncipe","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leona","SG":"Singapur","SX":"Sint Maarten","SY":"Siria","SO":"Somalia","LK":"Sri Lanka","ZA":"Sud\u00e1frica","SD":"Sud\u00e1n","SS":"Sud\u00e1n del Sur","SE":"Suecia","CH":"Suiza","SR":"Surinam","SJ":"Svalbard y Jan Mayen","TH":"Tailandia","TW":"Taiw\u00e1n","TZ":"Tanzania","TJ":"Tayikist\u00e1n","IO":"Territorio Brit\u00e1nico del Oc\u00e9ano \u00cdndico","TF":"Territorios Australes Franceses","PS":"Territorios Palestinos","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad y Tobago","TN":"T\u00fanez","TM":"Turkmenist\u00e1n","TR":"Turqu\u00eda","TV":"Tuvalu","UA":"Ucrania","UG":"Uganda","UY":"Uruguay","UZ":"Uzbekist\u00e1n","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","WF":"Wallis y Futuna","YE":"Yemen","DJ":"Yibuti","ZM":"Zambia","ZW":"Zimbabue"};

// Source http://country.io/phone.json
// Fixed: Removed spaces, removed plus sign, unified multiple prefixes
const prefixes = {"BD":"880","BE":"32","BF":"226","BG":"359","BA":"387","BB":"1-246","WF":"681","BL":"590","BM":"1-441","BN":"673","BO":"591","BH":"973","BI":"257","BJ":"229","BT":"975","JM":"1-876","BV":"","BW":"267","WS":"685","BQ":"599","BR":"55","BS":"1-242","JE":"44-1534","BY":"375","BZ":"501","RU":"7","RW":"250","RS":"381","TL":"670","RE":"262","TM":"993","TJ":"992","RO":"40","TK":"690","GW":"245","GU":"1-671","GT":"502","GS":"","GR":"30","GQ":"240","GP":"590","JP":"81","GY":"592","GG":"44-1481","GF":"594","GE":"995","GD":"1-473","GB":"44","GA":"241","SV":"503","GN":"224","GM":"220","GL":"299","GI":"350","GH":"233","OM":"968","TN":"216","JO":"962","HR":"385","HT":"509","HU":"36","HK":"852","HN":"504","VE":"58","PR":"1","PS":"970","PW":"680","PT":"351","SJ":"47","PY":"595","IQ":"964","PA":"507","PF":"689","PG":"675","PE":"51","PK":"92","PH":"63","PN":"870","PL":"48","PM":"508","ZM":"260","EH":"212","EE":"372","EG":"20","ZA":"27","EC":"593","IT":"39","VN":"84","SB":"677","ET":"251","SO":"252","ZW":"263","SA":"966","ES":"34","ER":"291","ME":"382","MD":"373","MG":"261","MF":"590","MA":"212","MC":"377","UZ":"998","MM":"95","ML":"223","MO":"853","MN":"976","MH":"692","MK":"389","MU":"230","MT":"356","MW":"265","MV":"960","MQ":"596","MP":"1-670","MS":"1-664","MR":"222","IM":"44-1624","UG":"256","TZ":"255","MY":"60","MX":"52","IL":"972","FR":"33","IO":"246","SH":"290","FI":"358","FJ":"679","FK":"500","FM":"691","FO":"298","NI":"505","NL":"31","NO":"47","NA":"264","VU":"678","NC":"687","NE":"227","NF":"672","NG":"234","NZ":"64","NP":"977","NR":"674","NU":"683","CK":"682","XK":"","CI":"225","CH":"41","CO":"57","CN":"86","CM":"237","CL":"56","CC":"61","CA":"1","CG":"242","CF":"236","CD":"243","CZ":"420","CY":"357","CX":"61","CR":"506","CW":"599","CV":"238","CU":"53","SZ":"268","SY":"963","SX":"599","KG":"996","KE":"254","SS":"211","SR":"597","KI":"686","KH":"855","KN":"1-869","KM":"269","ST":"239","SK":"421","KR":"82","SI":"386","KP":"850","KW":"965","SN":"221","SM":"378","SL":"232","SC":"248","KZ":"7","KY":"1-345","SG":"65","SE":"46","SD":"249","DO":"1","DM":"1-767","DJ":"253","DK":"45","VG":"1-284","DE":"49","YE":"967","DZ":"213","US":"1","UY":"598","YT":"262","UM":"1","LB":"961","LC":"1-758","LA":"856","TV":"688","TW":"886","TT":"1-868","TR":"90","LK":"94","LI":"423","LV":"371","TO":"676","LT":"370","LU":"352","LR":"231","LS":"266","TH":"66","TF":"","TG":"228","TD":"235","TC":"1-649","LY":"218","VA":"379","VC":"1-784","AE":"971","AD":"376","AG":"1-268","AF":"93","AI":"1-264","VI":"1-340","IS":"354","IR":"98","AM":"374","AL":"355","AO":"244","AQ":"","AS":"1-684","AR":"54","AU":"61","AT":"43","AW":"297","IN":"91","AX":"358-18","AZ":"994","IE":"353","ID":"62","UA":"380","QA":"974","MZ":"258"};

const buildCodes = (text = null) => {
    return Object.entries(names)
        .filter((country) => {
            if (!text) {
                return true;
            }

            return country[1].toLowerCase().indexOf(text.toLowerCase()) !== -1
        })
        .map((country) => {
            return country[0]
        });
}

const buildFavorites = (favorites) => {
    return favorites.map((favorite) => {
        return buildCodes().find((country) => {
            return country === favorite;
        })
    });
};

const CountryPicker = ({
    theme, ui, margin, width,
    country: initialCountry, favorites, more, messages,
    onSelect,
}) => {
    const [country, setCountry] = useState(initialCountry || null);
    const [filter, setFilter] = useState({
        text: "",
        more: false
    });
    const [select, setSelect] = useState(false);

    favorites = buildFavorites(favorites);

    useEffect(() => {
        if (favorites.length === 1) {
            setCountry(favorites[0]);

            onSelect(
                {
                    country: favorites[0],
                    prefix: prefixes[favorites[0]]
                },
            );
        }
    }, []);

    return <React.Fragment>
        <Container
            flow="row"
            align={{
                main: "space-between",
                cross: "center",
            }}
            margin={margin}
            width={width}
            border={{
                color: theme.country_picker.border.color,
                bottom: {
                    width: theme.country_picker.border.width,
                }
            }}
            onClick={() => {
                setSelect(true);
            }}
        >
            {!country
                ? <Text
                    size={theme.country_picker.size}
                    color={theme.country_picker.color}
                >
                    {messages.select}
                </Text>
                : <Container
                    flow="row"
                    align={{
                        main: "flex-start",
                        cross: "center"
                    }}
                >
                    <Flag
                        country={country}
                        size="md"
                        margin={1}
                    />
                    <Text
                        margin={{
                            left: 1
                        }}
                    >
                        {names[country]}
                    </Text>
                </Container>
            }
            <SecondaryButton
                margin={{
                    left: 1,
                    bottom: 1
                }}
                onClick={() => {
                    setSelect(true);
                }}
            >
                <FormIcon
                    data={ui.icons.actions.down}
                />
            </SecondaryButton>
        </Container>

        {select && <Modal
            flow="column"
            align={{
                main: "flex-start",
                cross: "center"
            }}
            margin={{
                top: 6,
                bottom: 6,
                left: 1,
                right: 1
            }}
            background={theme.modal.background}
            border={theme.modal.border}
            full
            onClose={() => {
                setFilter({
                    text: "",
                    more: false
                });

                setSelect(false);
            }}
        >
            <Input
                align={{
                    main: "center",
                    cross: "center",
                    self: "stretch"
                }}
                margin={{
                    top: 1,
                }}
                padding={{
                    left: 2,
                    right: 2
                }}
                value={filter.text}
                placeholder="Escribe para buscar"
                onChange={(value) => {
                    setFilter((prev) => {
                        return {
                            ...prev,
                            text: value
                        };
                    });
                }}
            />

            <CountryListWithTheme
                align={{
                    self: "stretch"
                }}
                countries={filter.more || filter.text
                    ? buildCodes(filter.text)
                    : favorites
                }
                onSelect={(country) => {
                    setFilter({
                        text: "",
                        more: false
                    });

                    setSelect(false);

                    setCountry(country);

                    onSelect(
                        {
                            country: country,
                            prefix: prefixes[country]
                        },
                    );
                }}
            />

            {more && !filter.more && <CountryItem
                align={{
                    self: "stretch"
                }}
                margin={{
                    bottom: 2,
                }}
                padding={{
                    top: 2,
                    left: 2,
                    right: 2
                }}
                // border={1}
                flag={<Flag
                    country="world"
                />}
                name="Todos los países"
                onClick={() => {
                    setFilter((prev) => {
                        return {
                            ...prev,
                            more: true
                        };
                    });
                }}
            />}

            <TertiaryButton
                align={{
                    self: "stretch"
                }}
                padding={{
                    top: 2,
                    bottom: 2,
                    left: 2,
                    right: 2
                }}
                border={{
                    color: theme.divider.border.color,
                    top: {
                        width: theme.divider.border.width
                    }
                }}
                onClick={() => {
                    setFilter({
                        text: "",
                        more: false
                    });

                    setSelect(false);
                }}
            >
                <Text
                    align={{
                        main: "center"
                    }}
                >
                    Cerrar
                </Text>
            </TertiaryButton>
        </Modal>}
    </React.Fragment>
};

CountryPicker.propTypes = {
    ui: PropTypes.shape({
        icons: PropTypes.shape({
            actions: PropTypes.shape({
                down: PropTypes.func.isRequired
            })
        })
    }).isRequired,
    messages: PropTypes.shape({
        select: PropTypes.string.isRequired
    }).isRequired,
    margin: ContainerSpec.MarginProp,
    width: ContainerSpec.WidthProp,
    country: PropTypes.string,
    favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
    more: PropTypes.bool,
    onSelect: PropTypes.func.isRequired, // ({country, prefix}),
};

const CountryList = ({
    theme, align, margin, border, countries, onSelect
}) => {
    return <BufferList
        align={align}
        margin={margin}
        border={border}
        data={countries}
        identifier={(country) => {
            return country;
        }}
        init={10}
        render={({item: country, index: i}) => {
            return <CountryItem
                flag={<Flag
                    country={country}
                />}
                name={names[country]}
                margin={{
                    top: i === 0 ? 2 : undefined,
                    bottom: 2,
                }}
                padding={{
                    top: i !== 0 ? 2 : undefined,
                    left: 2,
                    right: 2
                }}
                border={{
                    color: theme.divider.border.color,
                    top: i !== 0 ? {
                        width: theme.divider.border.width
                    } : undefined
                }}
                onClick={() => {
                    onSelect(country);
                }}
            />;
        }}
    />
};

CountryList.propTypes = {
    align: ContainerSpec.AlignProp,
    margin: ContainerSpec.MarginProp,
    countries: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onSelect: PropTypes.func.isRequired // (country)
};

const CountryListWithTheme = withTheme(CountryList);

const CountryItem = ({
    align, margin, padding, border, flag, name, onClick, ...props
}) => {
    return <Container
        {...props} // key
        flow="row"
        align={{
            main: "flex-start",
            cross: "center",
            ...align
        }}
        margin={margin}
        padding={padding}
        border={border}
        onClick={onClick}
    >
        {<flag.type size="md" {...flag.props} />}
        <Text
            margin={{
                left: 1
            }}
        >
            {name}
        </Text>
    </Container>;
};

CountryItem.propTypes = {
    margin: ContainerSpec.MarginProp,
    padding: ContainerSpec.PaddingProp,
    border: ContainerSpec.BorderProp,
    flag: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default withTheme(CountryPicker);