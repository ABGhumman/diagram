graph LR
    subgraph "User Interface Component"
    UI[User Interface Component]
    UI -->|User Input| UI_User_Input((User Input))
    UI -->|Display Login Page| UI_Login_Page((Display Login Page))
    UI -->|Display Sign Up Page| UI_Sign_Up_Page((Display Sign Up Page))
    UI -->|Display User Management Page| UI_User_Mgmt_Page((Display User Management Page))
    UI -->|Display Link Sharing Page| UI_Link_Share_Page((Display Link Sharing Page))
    UI -->|Display Analytics Report| UI_Analytics_Report((Display Analytics Report))
     UI -->|Display Bot List| UI_Bot_List((Display Bot List))
      UI -->|Display Profile Setup Page| UI_Profile_Setup_Page((Display Profile Setup Page))
    end

    subgraph "Authentication Component"
    AUTH[Authentication Component]
    AUTH -->|Authenticate User| AUTH_User((Authenticate User))
    AUTH -->|Register User| AUTH_Register((Register User))
    AUTH -->|Manage User| AUTH_Manage((Manage User))
        AUTH -->|User Input| UI
        AUTH -->|User Accounts| ACDB
    end

    subgraph "Account Database Component"
        ACDB[Account Database Component]
        ACDB -->|User Accounts| ACDB_User_Acc((User Accounts))
    end

     subgraph "Link Sharing Component"
       LS[Link Sharing Component]
        LS -->|Share Link| LS_Share_Link((Share Link))
         LS -->|User Input| UI
          LS -->|Create Link| AL
     end

     subgraph "Affiliate Link Component"
          AL[Affiliate Link Component]
           AL -->|Create Link| AL_Create_Link((Create Link))
           AL -->|Get Affiliate Link| AL_Get_Link((Get Affiliate Link))
     end

     subgraph "Auto-Sharing Component"
        AS[Auto-Sharing Component]
         AS -->|Manage Auto-Sharing| AS_AutoShare((Manage Auto-Sharing))
          AS -->|Get Affiliate Link| AL
            AS -->|Share Link| PI
     end

     subgraph "Platform Integration Component"
        PI[Platform Integration Component]
         PI -->|Share Link| PI_Share_Link((Share Link))
      end


     subgraph "Analytics Component"
        AN[Analytics Component]
        AN -->|Get Analytics Data| AN_Get_Data((Get Analytics Data))
        AN -->|Display Analytics Report| UI
        AN -->|Store Analytics| ANDB
      end
       subgraph "Analytics Database Component"
        ANDB[Analytics Database Component]
        ANDB -->|Store Analytics| ANDB_Store((Store Analytics))
       end

        subgraph "Bot Management Component"
        BM[Bot Management Component]
        BM -->|Manage Bots| BM_Manage_Bots((Manage Bots))
          BM -->|User Input| UI
         BM -->|Activate Bot| BI
       end

        subgraph "Bot Integration Component"
        BI[Bot Integration Component]
          BI -->|Activate Bot| BI_Activate_Bot((Activate Bot))
        end
      subgraph "Profile Management Component"
        PM[Profile Management Component]
        PM -->|Manage Profile| PM_Manage_Profile((Manage Profile))
         PM -->|User Input| UI
        PM -->|Update Profile| PDB
       end
       subgraph "Profile Database Component"
        PDB[Profile Database Component]
           PDB -->|Update Profile| PDB_Update_Profile((Update Profile))
       end


      subgraph "NLP Processor Component"
        NLP[NLP Processor Component]
          NLP -->|Identify Link| NLP_Identify_Link((Identify Link))
          NLP -->|Modify Coupon| NLP_Modify_Coupon((Modify Coupon))
            NLP -->|Convert Link| NLP_Convert_Link((Convert Link))
      end
   UI --. AUTH
   UI --. LS
    UI --. AN
    UI --. BM
    UI --. PM

  
    AL --. NLP
    ACDB --. AUTH
        ANDB --. AN
  PDB --. PM
