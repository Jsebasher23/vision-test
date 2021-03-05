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
    public class SaleDetailsController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/SaleDetails
        public IQueryable<SaleDetails> GetSaleDetails()
        {
            return db.SaleDetails;
        }

        // GET: api/SaleDetails/5
        [ResponseType(typeof(SaleDetails))]
        public IHttpActionResult GetSaleDetails(int id)
        {
            SaleDetails saleDetails = db.SaleDetails.Find(id);
            if (saleDetails == null)
            {
                return NotFound();
            }

            return Ok(saleDetails);
        }

        // PUT: api/SaleDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSaleDetails(int id, SaleDetails saleDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != saleDetails.SDetailID)
            {
                return BadRequest();
            }

            db.Entry(saleDetails).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SaleDetailsExists(id))
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

        // POST: api/SaleDetails
        [ResponseType(typeof(SaleDetails))]
        public IHttpActionResult PostSaleDetails(SaleDetails saleDetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SaleDetails.Add(saleDetails);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = saleDetails.SDetailID }, saleDetails);
        }

        // DELETE: api/SaleDetails/5
        [ResponseType(typeof(SaleDetails))]
        public IHttpActionResult DeleteSaleDetails(int id)
        {
            SaleDetails saleDetails = db.SaleDetails.Find(id);
            if (saleDetails == null)
            {
                return NotFound();
            }

            db.SaleDetails.Remove(saleDetails);
            db.SaveChanges();

            return Ok(saleDetails);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SaleDetailsExists(int id)
        {
            return db.SaleDetails.Count(e => e.SDetailID == id) > 0;
        }
    }
}