//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace dvision_test.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Customers
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Customers()
        {
            this.Sales = new HashSet<Sales>();
        }
    
        public int CustomerID { get; set; }
        public Nullable<int> CustomerNumIde { get; set; }
        public string CustomerTypeIde { get; set; }
        public string CustomerName { get; set; }
        public string CustomerLastName { get; set; }
        public Nullable<System.DateTime> CustomerBirthDate { get; set; }
        public Nullable<int> CustomerAGE { get; set; }
        public string CustomerEmail { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Sales> Sales { get; set; }
    }
}
