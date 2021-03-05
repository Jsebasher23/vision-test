using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using dgware_test.Models;

namespace dgware_test.Controllers
{
    public class SalesController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Sales
        public IQueryable<Sales> GetSales()
        {
            return db.Sales;
        }

        // GET: api/Sales/5
        [ResponseType(typeof(Sales))]
        public IHttpActionResult GetSales(int id)
        {
            Sales sales = db.Sales.Find(id);
            if (sales == null)
            {
                return NotFound();
            }

            return Ok(sales);
        }

        // PUT: api/Sales/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSales(int id, Sales sales)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sales.SaleID)
            {
                return BadRequest();
            }

            db.Entry(sales).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Sales
        [ResponseType(typeof(Sales))]
        public IHttpActionResult PostSales(Sales sales)
        {
            try
            {
                db.Sales.Add(sales);
                foreach (var item in sales.SaleDetails)
                {
                    db.SaleDetails.Add(item);
                }

                db.SaveChanges();

                return Ok();                

            }
            catch (Exception ex)
            {

                throw ex;
            }            

            

        }

        // DELETE: api/Sales/5
        [ResponseType(typeof(Sales))]
        public IHttpActionResult DeleteSales(int id)
        {
            Sales sales = db.Sales.Find(id);
            if (sales == null)
            {
                return NotFound();
            }

            db.Sales.Remove(sales);
            db.SaveChanges();

            return Ok(sales);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SalesExists(int id)
        {
            return db.Sales.Count(e => e.SaleID == id) > 0;
        }
    }
}