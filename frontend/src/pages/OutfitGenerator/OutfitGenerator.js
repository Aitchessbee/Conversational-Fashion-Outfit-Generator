import React, { useState, useEffect } from "react";
import styles from "./Styles/outfitGenerator.module.css";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import TransgenderOutlinedIcon from "@mui/icons-material/TransgenderOutlined";
import AgeSelector from "./Components/AgeSelector";
import GenderSelector from "./Components/GenderSelector";
import SizeSelector from "./Components/SizeSelector";
import OccassionSelector from "./Components/OccassionSelector";
import Conversational from "./Components/Conversational";
import axios from "axios";

function OutfitGenerator() {
    const [selectedAge, setSelectedAge] = useState();
    const [selectedGender, setSelectedGender] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [selectedOccassion, setSelectedOccassion] = useState();
    const [showConversation, setShowConversation] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assisstant",
            content: [
                {
                    product_link:
                        "https://www.flipkart.com/3bros-solid-men-polo-neck-green-t-shirt/p/itmd0551940a1b12?pid=TSHGBBN9JJXDYYQX&lid=LSTTSHGBBN9JJXDYYQX6QRRYG&marketplace=FLIPKART&store=clo%2Fash%2Fank%2Fedy&srno=b_1_6&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BT-Shirts_IF56C41VGEYS&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&fm=organic&iid=e54e9e73-d677-416a-a1bc-246e82efc6ac.TSHGBBN9JJXDYYQX.SEARCH&ppt=browse&ppn=browse&ssid=gejc3m57ps0000001692569180047",
                    product_img:
                        "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/s/c/p/m-db1024-15-3bros-original-imagz8zjfxthf7kn.jpeg?q=70",
                },
                {
                    product_link:
                        "https://www.flipkart.com/ausk-striped-men-round-neck-pink-white-t-shirt/p/itm039853d3b4a22?pid=TSHGZBP8NXCMQHZE&lid=LSTTSHGZBP8NXCMQHZENB8Q0I&marketplace=FLIPKART&store=clo%2Fash%2Fank%2Fedy&srno=b_1_10&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion~Men%2527s%2BTop%2BWear~Men%2527s%2BT-Shirts_IF56C41VGEYS&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&fm=organic&iid=e54e9e73-d677-416a-a1bc-246e82efc6ac.TSHGZBP8NXCMQHZE.SEARCH&ppt=browse&ppn=browse",
                    product_img:
                        "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/b/w/q/xl-auk0163-ausk-original-imagzbp8yzz5an8k.jpeg?q=70",
                },
            ],
        },
    ]);

    const submit = () => {
        // setMessages([
        //     {
        //         role: "system",
        //         content: `Select product_urls of 4 products from the csv file which best fit the following criteria age=${selectedAge}, gender=${selectedGender}, size=${selectedSize}, occassion=${selectedOccassion}`,
        //     },
        // ]);

        const data = {
            age: selectedAge,
            gender: selectedGender,
            size: selectedSize,
            occassion: selectedOccassion,
        };

        const getData = async () => {
            const res = await axios.post("http://localhost:8000", data);
            console.log(res.data);
        };

        getData();

        setTimeout(() => {
            setShowConversation(true);
        }, 2000);
    };

    // useEffect(() => {
    //     console.log(selectedAge);
    // }, [selectedAge]);

    return (
        <div>
            <h1 className={styles.heading}>Outfit Generator</h1>
            <div>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="User purchase history for recommendation"
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Recommend items similar to cart"
                    />
                </FormGroup>
            </div>
            <div>
                <h3>Why age group are you in?</h3>
                <div className={styles.ageSelectors}>
                    <AgeSelector
                        ageGroup="4 - 11 YRS."
                        selectedAge={selectedAge}
                        setAgeFunction={setSelectedAge}
                    />
                    <AgeSelector
                        ageGroup="12 - 18 YRS."
                        selectedAge={selectedAge}
                        setAgeFunction={setSelectedAge}
                    />
                    <AgeSelector
                        ageGroup="19 - 29 YRS."
                        selectedAge={selectedAge}
                        setAgeFunction={setSelectedAge}
                    />
                    <AgeSelector
                        ageGroup="30 - 44 YRS."
                        selectedAge={selectedAge}
                        setAgeFunction={setSelectedAge}
                    />
                    <AgeSelector
                        ageGroup="45 - 64 YRS."
                        selectedAge={selectedAge}
                        setAgeFunction={setSelectedAge}
                    />
                    <AgeSelector
                        ageGroup="65 YRS. & ABOVE"
                        selectedAge={selectedAge}
                        setAgeFunction={setSelectedAge}
                    />
                </div>
            </div>
            <div className={styles.genderAndSizeContainer}>
                <div>
                    <h3>What is your gender?</h3>
                    <div className={styles.genderSelectors}>
                        <GenderSelector
                            gender="Male"
                            icon={<MaleOutlinedIcon fontSize="40px" />}
                            selectedGender={selectedGender}
                            setGenderFunction={setSelectedGender}
                        />
                        <GenderSelector
                            gender="Female"
                            icon={<FemaleOutlinedIcon fontSize="40px" />}
                            selectedGender={selectedGender}
                            setGenderFunction={setSelectedGender}
                        />
                        <GenderSelector
                            gender="Don't Specify"
                            icon={<TransgenderOutlinedIcon fontSize="40px" />}
                            selectedGender={selectedGender}
                            setGenderFunction={setSelectedGender}
                        />
                    </div>
                </div>
                <div>
                    <h3>What is your size?</h3>
                    <div className={styles.sizeSelectors}>
                        <SizeSelector
                            size="S"
                            selectedSize={selectedSize}
                            setSizeFunction={setSelectedSize}
                        />
                        <SizeSelector
                            size="M"
                            selectedSize={selectedSize}
                            setSizeFunction={setSelectedSize}
                        />
                        <SizeSelector
                            size="L"
                            selectedSize={selectedSize}
                            setSizeFunction={setSelectedSize}
                        />
                        <SizeSelector
                            size="XL"
                            selectedSize={selectedSize}
                            setSizeFunction={setSelectedSize}
                        />
                        <SizeSelector
                            size="XXL"
                            selectedSize={selectedSize}
                            setSizeFunction={setSelectedSize}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h3>Choose or specify the occassion.</h3>
                <div className={styles.occassionSelectors}>
                    <OccassionSelector
                        occassion="Formal"
                        selectedOccassion={selectedOccassion}
                        setOccassionFunction={setSelectedOccassion}
                    />
                    <OccassionSelector
                        occassion="Party"
                        selectedOccassion={selectedOccassion}
                        setOccassionFunction={setSelectedOccassion}
                    />
                    <OccassionSelector
                        occassion="Sports"
                        selectedOccassion={selectedOccassion}
                        setOccassionFunction={setSelectedOccassion}
                    />
                    <OccassionSelector
                        occassion="Casual"
                        selectedOccassion={selectedOccassion}
                        setOccassionFunction={setSelectedOccassion}
                    />
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.submitButton} onClick={submit}>
                    SUBMIT
                </button>
            </div>
            {showConversation && <Conversational messages={messages} setMessages={setMessages} />}
        </div>
    );
}

export default OutfitGenerator;
