export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_audit_logs: {
        Row: {
          action: string
          created_at: string
          detail: Json | null
          entity: string
          entity_id: number | null
          id: number
          performed_by: string | null
        }
        Insert: {
          action: string
          created_at?: string
          detail?: Json | null
          entity: string
          entity_id?: number | null
          id?: number
          performed_by?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          detail?: Json | null
          entity?: string
          entity_id?: number | null
          id?: number
          performed_by?: string | null
        }
        Relationships: []
      }
      casestudies: {
        Row: {
          case_id: number
          case_title: string
          challenge: string | null
          industry_type: string
          installation_env: string
          product_model_used: string | null
          project_date: string | null
          resolution_pixels: string | null
          result_impact: string | null
          solution_provided: string | null
          total_area_sqm: number | null
        }
        Insert: {
          case_id?: number
          case_title: string
          challenge?: string | null
          industry_type: string
          installation_env: string
          product_model_used?: string | null
          project_date?: string | null
          resolution_pixels?: string | null
          result_impact?: string | null
          solution_provided?: string | null
          total_area_sqm?: number | null
        }
        Update: {
          case_id?: number
          case_title?: string
          challenge?: string | null
          industry_type?: string
          installation_env?: string
          product_model_used?: string | null
          project_date?: string | null
          resolution_pixels?: string | null
          result_impact?: string | null
          solution_provided?: string | null
          total_area_sqm?: number | null
        }
        Relationships: []
      }
      leads_quotation: {
        Row: {
          assigned_sales_rep: string | null
          budget_range: string | null
          company_name: string
          contact_email: string
          contact_phone: string
          detailed_requirement: string | null
          expected_size: string
          expected_timeline: string | null
          inquirer_name: string | null
          inquiry_date: string
          lead_id: number
          lead_status: string
          project_name: string
          required_solution: string
        }
        Insert: {
          assigned_sales_rep?: string | null
          budget_range?: string | null
          company_name: string
          contact_email: string
          contact_phone: string
          detailed_requirement?: string | null
          expected_size: string
          expected_timeline?: string | null
          inquirer_name?: string | null
          inquiry_date?: string
          lead_id?: number
          lead_status?: string
          project_name: string
          required_solution: string
        }
        Update: {
          assigned_sales_rep?: string | null
          budget_range?: string | null
          company_name?: string
          contact_email?: string
          contact_phone?: string
          detailed_requirement?: string | null
          expected_size?: string
          expected_timeline?: string | null
          inquirer_name?: string | null
          inquiry_date?: string
          lead_id?: number
          lead_status?: string
          project_name?: string
          required_solution?: string
        }
        Relationships: []
      }
      Solutions: {
        Row: {
          solution_id: number
          title: string
          slug: string
          short_description: string | null
          technical_specs: Json | null
          business_value: string | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          solution_id?: number
          title: string
          slug: string
          short_description?: string | null
          technical_specs?: Json | null
          business_value?: string | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          solution_id?: number
          title?: string
          slug?: string
          short_description?: string | null
          technical_specs?: Json | null
          business_value?: string | null
          is_active?: boolean
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

