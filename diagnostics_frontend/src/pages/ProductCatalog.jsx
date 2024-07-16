import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductCatalog = () => {
    // data for products
    const data=[
        {
            "name": "COVID-19 PCR Test",
            "no": "COVIDPCR001",
            "description": "Polymerase Chain Reaction (PCR) test to detect COVID-19 virus RNA.",
            "summary": "COVID-19 PCR Test",
            "type": "Diagnostic",
            "price": 99.99,
            "location": "Lab A",
            "reportsin": "2 days"
        },
        {
            "name": "Blood Glucose Test",
            "no": "GLU001",
            "description": "Measures blood glucose levels to assess diabetes or prediabetes.",
            "summary": "Blood Glucose Test",
            "type": "Diagnostic",
            "price": 19.99,
            "location": "Lab B",
            "reportsin": "Same day"
        },
        {
            "name": "Complete Blood Count (CBC)",
            "no": "CBC005",
            "description": "Provides detailed information about blood cells and hematocrit levels.",
            "summary": "Complete Blood Count",
            "type": "Diagnostic",
            "price": 29.99,
            "location": "Lab C",
            "reportsin": "Next day"
        },
        {
            "name": "Cholesterol Test",
            "no": "CHOL003",
            "description": "Measures cholesterol levels to assess heart health.",
            "summary": "Cholesterol Test",
            "type": "Diagnostic",
            "price": 24.99,
            "location": "Lab A",
            "reportsin": "Same day"
        },
        {
            "name": "Thyroid Function Test",
            "no": "THY001",
            "description": "Evaluates thyroid hormone levels to diagnose thyroid disorders.",
            "summary": "Thyroid Function Test",
            "type": "Diagnostic",
            "price": 39.99,
            "location": "Lab B",
            "reportsin": "2 days"
        },
        {
            "name": "Urinalysis",
            "no": "URINE007",
            "description": "Examines urine for signs of infection or kidney disease.",
            "summary": "Urinalysis",
            "type": "Diagnostic",
            "price": 14.99,
            "location": "Lab C",
            "reportsin": "Same day"
        },
        {
            "name": "Stool Culture",
            "no": "STOOLCULT002",
            "description": "Identifies bacteria or parasites in the stool.",
            "summary": "Stool Culture",
            "type": "Diagnostic",
            "price": 34.99,
            "location": "Lab A",
            "reportsin": "3 days"
        },
        {
            "name": "HIV Antibody Test",
            "no": "HIV001",
            "description": "Detects antibodies to HIV to diagnose HIV infection.",
            "summary": "HIV Antibody Test",
            "type": "Diagnostic",
            "price": 49.99,
            "location": "Lab B",
            "reportsin": "1 day"
        },
        {
            "name": "Hemoglobin A1c Test",
            "no": "HBA1C004",
            "description": "Measures average blood sugar levels over the past 2-3 months.",
            "summary": "Hemoglobin A1c Test",
            "type": "Diagnostic",
            "price": 29.99,
            "location": "Lab C",
            "reportsin": "2 days"
        },
        {
            "name": "Liver Function Panel",
            "no": "LFP001",
            "description": "Tests liver enzymes and other substances to assess liver function.",
            "summary": "Liver Function Panel",
            "type": "Diagnostic",
            "price": 39.99,
            "location": "Lab A",
            "reportsin": "Next day"
        },
        {
            "name": "Electrocardiogram (ECG/EKG)",
            "no": "ECG002",
            "description": "Records electrical activity of the heart to detect heart problems.",
            "summary": "Electrocardiogram",
            "type": "Diagnostic",
            "price": 59.99,
            "location": "Lab B",
            "reportsin": "Same day"
        },
        {
            "name": "Cervical Cancer Screening (Pap Smear)",
            "no": "PAP001",
            "description": "Tests for abnormal cells in the cervix to detect cervical cancer.",
            "summary": "Pap Smear",
            "type": "Screening",
            "price": 49.99,
            "location": "Lab C",
            "reportsin": "2 days"
        },
        {
            "name": "Prostate Specific Antigen (PSA) Test",
            "no": "PSA003",
            "description": "Measures PSA levels in the blood to screen for prostate cancer.",
            "summary": "PSA Test",
            "type": "Screening",
            "price": 44.99,
            "location": "Lab A",
            "reportsin": "Next day"
        },
        {
            "name": "Bone Density Scan (DEXA)",
            "no": "DEXA005",
            "description": "Measures bone density to assess osteoporosis risk.",
            "summary": "DEXA Scan",
            "type": "Diagnostic",
            "price": 69.99,
            "location": "Lab B",
            "reportsin": "3 days"
        },
        {
            "name": "Mammogram",
            "no": "MAMMO001",
            "description": "X-ray of breast tissue to screen for breast cancer.",
            "summary": "Mammogram",
            "type": "Screening",
            "price": 79.99,
            "location": "Lab C",
            "reportsin": "4 days"
        },
        {
            "name": "Colonoscopy",
            "no": "COLON001",
            "description": "Examines the colon and rectum for abnormalities or cancer.",
            "summary": "Colonoscopy",
            "type": "Diagnostic",
            "price": 199.99,
            "location": "Lab A",
            "reportsin": "5 days"
        },
        {
            "name": "Vitamin D Test",
            "no": "VITD002",
            "description": "Measures vitamin D levels in the blood.",
            "summary": "Vitamin D Test",
            "type": "Diagnostic",
            "price": 34.99,
            "location": "Lab B",
            "reportsin": "2 days"
        },
        {
            "name": "Allergy Testing (Skin Prick Test)",
            "no": "ALLERGY003",
            "description": "Tests for allergic reactions by exposing skin to potential allergens.",
            "summary": "Allergy Testing",
            "type": "Diagnostic",
            "price": 59.99,
            "location": "Lab C",
            "reportsin": "Next day"
        },
        {
            "name": "Throat Culture",
            "no": "THROAT001",
            "description": "Identifies bacteria causing throat infections.",
            "summary": "Throat Culture",
            "type": "Diagnostic",
            "price": 24.99,
            "location": "Lab A",
            "reportsin": "Same day"
        },
        {
            "name": "Fecal Occult Blood Test (FOBT)",
            "no": "FOBT002",
            "description": "Tests for hidden blood in the stool, which can indicate colorectal cancer.",
            "summary": "FOBT",
            "type": "Diagnostic",
            "price": 19.99,
            "location": "Lab B",
            "reportsin": "Same day"
        },
        {
            "name": "Genetic Testing (BRCA1/BRCA2)",
            "no": "GENETIC004",
            "description": "Tests for mutations in BRCA1 and BRCA2 genes to assess cancer risk.",
            "summary": "Genetic Testing",
            "type": "Diagnostic",
            "price": 149.99,
            "location": "Lab C",
            "reportsin": "7 days"
        },
        {
            "name": "Lead Screening Test",
            "no": "LEAD001",
            "description": "Measures lead levels in the blood, particularly in children.",
            "summary": "Lead Screening Test",
            "type": "Diagnostic",
            "price": 29.99,
            "location": "Lab A",
            "reportsin": "3 days"
        },
        {
            "name": "Pregnancy Test (HCG)",
            "no": "PREG001",
            "description": "Tests for the presence of human chorionic gonadotropin (HCG) hormone in urine.",
            "summary": "Pregnancy Test",
            "type": "Diagnostic",
            "price": 9.99,
            "location": "Lab B",
            "reportsin": "Same day"
        },
        {
            "name": "Lipid Panel Test",
            "no": "LIPID003",
            "description": "Measures cholesterol and triglyceride levels in the blood.",
            "summary": "Lipid Panel Test",
            "type": "Diagnostic",
        }];  

    const [filteredData,setfilteredData]  =useState(data);
    const [searchTerm,setsearchTerm]=useState("");
    const [div_num,setdivnum]=(filteredData.length/5).toFixed(0);
    const [page,setpage]=useState(1);
    const arr=[...Array(Number(div_num)).keys()];
   

        const HandleSearchFilter =(e)=>{
            setsearchTerm(e.target.value);
            if(filteredData.length>0){setfilteredData(data.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase())));}
            else {setfilteredData(data);}
        }

        const HandlePage=(num)=>{setpage(num+1);}
        const HandlePrev=()=>{if(page-1>0)setpage(page-1);}
        const HandleNext=()=>{if(page<div_num)setpage(page+1);}

   

    return ( <>
    <div className="bg">
        <span>Search: <input type="text" onChange={HandleSearchFilter}/></span>
        <span>
            <button onClick={HandlePrev}>Prev</button> 
            {arr.map((item)=><button key={item} onClick={()=>{HandlePage(item)}}>{item}</button> )} 
            <button onClick={HandleNext}>Next</button>
        </span>
        {filteredData.slice(page*5-5,page*5).map((item)=><ProductCard key={item.no} obj={item}/>)}
    
    </div>
    </> );
}
 
export default ProductCatalog;