
/* START GENERATED MESSAGE */
BV.define('_i18n_avatarIconSubmissionForm', ['vendor/messageformat', 'vendor/handlebars/runtime', 'underscore', 'framework/util/bvtrackerqueue'], function (MessageFormat, Handlebars, _, BVTrackerQueue) {
function avatarIconSubmissionForm( data ) {
try { return (function(d){
var r = "";
r += "Avatar image";
return r;
})(data); } catch(e) { BVTrackerQueue.push( [ 'error', new Error('MF error on `avatarIconSubmissionForm`: ' + e.toString() ) ] ); return ''; }
}
Handlebars.registerHelper('_i18n_avatarIconSubmissionForm', function () {
var data = {};
var args = [].slice.call( arguments, 0, arguments.length-1 );
_(args).forEach(function (arg) {
  _.extend(data, arg);
});
return avatarIconSubmissionForm(data);
});
return avatarIconSubmissionForm;
});
/* END GENERATED MESSAGE */;
/* START_TEMPLATE */
BV.define('hbs!submissionForm',['hbs','vendor/handlebars/runtime','hbs!rejectionErrors', 'hbs!submissionFieldsComment', 'hbs!submissionFieldsQuestion', 'hbs!submissionFieldsAnswer', 'hbs!submissionFieldsReview', 'hbs!submissionFieldsUserInfo', 'hbs!submissionFieldCategory', 'hbs!submissionLegend', 'hbs!submissionInput', 'hbs!submissionLabel', 'hbs!agreementsReviews', 'hbs!agreementsQuestions', 'template/helpers/equals', 'template/helpers/ifHasFeature', 'template/helpers/extmsg', 'template/helpers/submissionField', '_i18n_avatarIconSubmissionForm'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = depth0.subject),stack1 == null || stack1 === false ? stack1 : stack1.Type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  
  return "True";
  }

function program5(depth0,data) {
  
  
  return "False";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.agreementsReviews, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return " <input type=\"hidden\" name=\"agreedtotermsandconditions\" value=\"false\" class=\"bv-noremember\"> ";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.agreementsQuestions, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <input type=\"hidden\" name=\"ve\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.apiConfig),stack1 == null || stack1 === false ? stack1 : stack1.virtualEnvironment)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-noremember\" /> ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <input type=\"hidden\" name=\"displaycode\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.apiConfig),stack1 == null || stack1 === false ? stack1 : stack1.displaycode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-noremember\" /> ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <input type=\"hidden\" name=\"hostedauthentication_callbackUrl\" value=\"";
  if (stack1 = helpers.hostedAuthCallbackUrl) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.hostedAuthCallbackUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"bv-noremember\" /> ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <input type=\"hidden\" name=\"user\" value=\"";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.user; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"bv-noremember\" /> ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += " <div class=\"bv-author-avatar\"> ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.author),stack1 == null || stack1 === false ? stack1 : stack1._avatarImage), {hash:{},inverse:self.noop,fn:self.program(21, program21, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> ";
  return buffer;
  }
function program21(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += " <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.author),stack1 == null || stack1 === false ? stack1 : stack1._avatarImage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\"";
  if (stack2 = helpers._i18n_avatarIconSubmissionForm) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0._i18n_avatarIconSubmissionForm; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" class=\"bv-author-thumb\"/> ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " <div class=\"bv-submission-section\"> ";
  stack1 = helpers['if'].call(depth0, depth0.rejectionErrors, {hash:{},inverse:self.noop,fn:self.program(24, program24, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.fingerprintScriptError, {hash:{},inverse:self.noop,fn:self.program(26, program26, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <span id=\"bv-required-text\"> <p class=\"bv-required-fields-text\">";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "display_required_text", depth0.msgpack, options) : helperMissing.call(depth0, "extmsg", "display_required_text", depth0.msgpack, options)))
    + "</p> ";
  options = {hash:{},inverse:self.noop,fn:self.program(28, program28, data)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0.contentType, "review", options) : helperMissing.call(depth0, "equals", depth0.contentType, "review", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </span> <span class=\"bv-off-screen\" id=\"bv-required-text-reader\">";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "field_required", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "field_required", depth0.msgpack, depth0, options)))
    + "</span> <div class=\"bv-fieldsets bv-input-fieldsets\"> ";
  stack2 = helpers['if'].call(depth0, depth0.comment, {hash:{},inverse:self.noop,fn:self.program(30, program30, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.question, {hash:{},inverse:self.noop,fn:self.program(32, program32, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.answer, {hash:{},inverse:self.noop,fn:self.program(34, program34, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers.each.call(depth0, depth0.fieldCategoryOrder, {hash:{},inverse:self.noop,fn:self.programWithDepth(program36, data, depth0)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> ";
  stack2 = helpers.unless.call(depth0, depth0.shortForm, {hash:{},inverse:self.noop,fn:self.program(56, program56, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> ";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.rejectionErrors, 'rejectionErrors', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " <div class=\"bv-submission-rejection-errors bv-focusable\"> <span class=\"bv-submission-rejection-header-text\"> ";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "error_FAILED_TO_LOAD_FINGERPRINT_BEFORE", depth0.msgpack, options) : helperMissing.call(depth0, "extmsg", "error_FAILED_TO_LOAD_FINGERPRINT_BEFORE", depth0.msgpack, options)))
    + " </span> </div> ";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " <span class=\"bv-off-screen\" aria-hidden=\"false\">";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "offscreen_instructions_for_ratings", depth0.msgpack, options) : helperMissing.call(depth0, "extmsg", "offscreen_instructions_for_ratings", depth0.msgpack, options)))
    + ".</span> ";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionFieldsComment, 'submissionFieldsComment', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionFieldsQuestion, 'submissionFieldsQuestion', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionFieldsAnswer, 'submissionFieldsAnswer', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program36(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program37, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0, "baseReviewQuestions", options) : helperMissing.call(depth0, "equals", depth0, "baseReviewQuestions", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program39, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0, "basicUserInfo", options) : helperMissing.call(depth0, "equals", depth0, "basicUserInfo", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program41, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0, "people", options) : helperMissing.call(depth0, "equals", depth0, "people", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program43, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0, "ratings", options) : helperMissing.call(depth0, "equals", depth0, "ratings", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program45, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0, "product", options) : helperMissing.call(depth0, "equals", depth0, "product", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program47, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0, "injected", options) : helperMissing.call(depth0, "equals", depth0, "injected", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program49, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0, "default", options) : helperMissing.call(depth0, "equals", depth0, "default", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program51, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0, "netPromoterScore", options) : helperMissing.call(depth0, "equals", depth0, "netPromoterScore", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program37(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionFieldsReview, 'submissionFieldsReview', depth2, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program39(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionFieldsUserInfo, 'submissionFieldsUserInfo', depth2, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program41(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += " ";
  stack2 = self.invokePartial(partials.submissionFieldCategory, 'submissionFieldCategory', ((stack1 = depth2.specialFields),stack1 == null || stack1 === false ? stack1 : stack1.people), helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }

function program43(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += " ";
  stack2 = self.invokePartial(partials.submissionFieldCategory, 'submissionFieldCategory', ((stack1 = depth2.specialFields),stack1 == null || stack1 === false ? stack1 : stack1.ratings), helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }

function program45(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += " ";
  stack2 = self.invokePartial(partials.submissionFieldCategory, 'submissionFieldCategory', ((stack1 = depth2.specialFields),stack1 == null || stack1 === false ? stack1 : stack1.product), helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }

function program47(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += " ";
  stack2 = self.invokePartial(partials.submissionFieldCategory, 'submissionFieldCategory', ((stack1 = depth2.specialFields),stack1 == null || stack1 === false ? stack1 : stack1.injected), helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }

function program49(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += " ";
  stack2 = self.invokePartial(partials.submissionFieldCategory, 'submissionFieldCategory', ((stack1 = depth2.specialFields),stack1 == null || stack1 === false ? stack1 : stack1['default']), helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }

function program51(depth0,data,depth2) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['with'].call(depth0, depth2, {hash:{},inverse:self.noop,fn:self.program(52, program52, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program52(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'inputClasses': ("bv-focusable"),
    'numHelpers': ("2")
  },inverse:self.noop,fn:self.program(53, program53, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "netpromoterscore", depth0.formFields, depth0, options) : helperMissing.call(depth0, "submissionField", "netpromoterscore", depth0.formFields, depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program53(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " <fieldset class=\"bv-fieldset bv-fieldset-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " bv-";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-field ";
  if (stack2 = helpers.fieldsetClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.fieldsetClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> ";
  stack2 = self.invokePartial(partials.submissionLegend, 'submissionLegend', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <div class=\"bv-fieldset-arrowicon\"></div> <div class=\"bv-fieldset-inner\"> ";
  stack2 = self.invokePartial(partials.submissionInput, 'submissionInput', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.program(54, program54, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "netpromotercomment", ((stack1 = depth0.rawData),stack1 == null || stack1 === false ? stack1 : stack1.formFields), depth0.rawData, options) : helperMissing.call(depth0, "submissionField", "netpromotercomment", ((stack1 = depth0.rawData),stack1 == null || stack1 === false ? stack1 : stack1.formFields), depth0.rawData, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> </fieldset> ";
  return buffer;
  }
function program54(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += " <fieldset class=\"bv-fieldset bv-fieldset-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " bv-";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-field ";
  if (stack2 = helpers.fieldsetClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.fieldsetClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> <div class=\"bv-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-wrapper\"> ";
  stack2 = self.invokePartial(partials.submissionLabel, 'submissionLabel', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = self.invokePartial(partials.submissionInput, 'submissionInput', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> </fieldset> ";
  return buffer;
  }

function program56(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " <div class=\"bv-fieldsets bv-fieldsets-actions\"> ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program57, data, depth0)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0.contentType, "review", options) : helperMissing.call(depth0, "equals", depth0.contentType, "review", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.question, {hash:{},inverse:self.noop,fn:self.programWithDepth(program61, data, depth0)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.answer, {hash:{},inverse:self.noop,fn:self.programWithDepth(program61, data, depth0)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " "
    + " <div class=\"bv-form-actions bv-fieldset\"> <div class=\"bv-fieldset-arrowicon\"></div> <div class=\"bv-fieldset-inner\"> <div class=\"bv-actions-container\"> <p id=\"bv-casltext-";
  if (stack2 = helpers.contentType) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.contentType; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"bv-fieldset-casltext\">";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "display_casltext", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "display_casltext", depth0.msgpack, depth0, options)))
    + "</p> <button type=\"button\" aria-label=\"";
  options = {hash:{
    'prefix': ("submit_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, depth0.contentType, depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", depth0.contentType, depth0.msgpack, depth0, options)))
    + "\" aria-describedby=\"bv-casltext-";
  if (stack2 = helpers.contentType) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.contentType; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"bv-form-actions-submit bv-submit bv-focusable bv-submission-button-submit\" type=\"submit\" name=\"bv-submit-button\">";
  options = {hash:{
    'prefix': ("submit_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, depth0.contentType, depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", depth0.contentType, depth0.msgpack, depth0, options)))
    + "</button> <button type=\"button\" class=\"bv-form-action bv-cancel bv-submission-button-submit\">";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "cancel", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "cancel", depth0.msgpack, depth0, options)))
    + "</button> </div> </div> </div> </div> ";
  return buffer;
  }
function program57(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += " ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.agreements),stack1 == null || stack1 === false ? stack1 : stack1.reviews), {hash:{},inverse:self.noop,fn:self.programWithDepth(program58, data, depth0, depth1)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program58(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'inputType': ("checkbox")
  },inverse:self.noop,fn:self.program(59, program59, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, depth0.id, ((stack1 = depth2.agreements),stack1 == null || stack1 === false ? stack1 : stack1.reviews), depth1, options) : helperMissing.call(depth0, "submissionField", depth0.id, ((stack1 = depth2.agreements),stack1 == null || stack1 === false ? stack1 : stack1.reviews), depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program59(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.agreementsReviews, 'agreementsReviews', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program61(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += " ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.agreements),stack1 == null || stack1 === false ? stack1 : stack1.questions), {hash:{},inverse:self.noop,fn:self.programWithDepth(program62, data, depth0, depth1)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program62(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'inputType': ("checkbox")
  },inverse:self.noop,fn:self.program(63, program63, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, depth0.id, ((stack1 = depth2.agreements),stack1 == null || stack1 === false ? stack1 : stack1.questions), depth1, options) : helperMissing.call(depth0, "submissionField", depth0.id, ((stack1 = depth2.agreements),stack1 == null || stack1 === false ? stack1 : stack1.questions), depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program63(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.agreementsQuestions, 'agreementsQuestions', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

  buffer += "<div class=\"bv-compat\"> <form id=\"bv-submit";
  if (stack1 = helpers.contentType) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.contentType; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-"
    + escapeExpression(((stack1 = ((stack1 = depth0.subject),stack1 == null || stack1 === false ? stack1 : stack1.Type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = ((stack1 = depth0.subject),stack1 == null || stack1 === false ? stack1 : stack1.SanitizedId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-";
  if (stack2 = helpers.modelCid) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.modelCid; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"bv-submission-target-";
  if (stack2 = helpers.channelId) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.channelId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" action=\"https:"
    + escapeExpression(((stack1 = ((stack1 = depth0.apiConfig),stack1 == null || stack1 === false ? stack1 : stack1.baseUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "submit";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0.contentType, "comment", options) : helperMissing.call(depth0, "equals", depth0.contentType, "comment", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  if (stack2 = helpers.contentType) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.contentType; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + ".json?\" accept-charset=\"utf-8\" method=\"POST\" class=\"bv-form\"> <input type=\"hidden\" name=\"passkey\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.apiConfig),stack1 == null || stack1 === false ? stack1 : stack1.passkey)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-noremember\" /> <input type=\"hidden\" name=\"action\" value=\"submit\" class=\"bv-noremember\" /> <input type=\"hidden\" name=\"apiversion\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.apiConfig),stack1 == null || stack1 === false ? stack1 : stack1.apiversion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-noremember\" /> <input type=\"hidden\" name=\"callback\" value=\"";
  if (stack2 = helpers.postCallback) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.postCallback; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"bv-noremember\" /> <input type=\"hidden\" name=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.subject),stack1 == null || stack1 === false ? stack1 : stack1.Type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "id\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.subject),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-noremember\" /> <input type=\"hidden\" name=\"campaignid\" value=\"";
  if (stack2 = helpers.campaignId) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.campaignId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"bv-noremember\" /> <input type=\"hidden\" name=\"fp\" value=\"\" class=\"bv-noremember\" /> <input type=\"hidden\" name=\"forceutf8\" value=\"&#9760;\" class=\"bv-noremember\" /> <input type=\"hidden\" name=\"locale\" value=\"";
  if (stack2 = helpers.locale) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.locale; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"bv-noremember\" /> <input type=\"hidden\" name=\"contextdatavalue_VerifiedPurchaser\" value=\"";
  stack2 = helpers['if'].call(depth0, depth0.verifiedPurchaser, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" class=\"bv-noremember\" /> ";
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, depth0.contentType, "review", options) : helperMissing.call(depth0, "equals", depth0.contentType, "review", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.question, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.answer, {hash:{},inverse:self.noop,fn:self.program(10, program10, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.apiConfig),stack1 == null || stack1 === false ? stack1 : stack1.virtualEnvironment), {hash:{},inverse:self.noop,fn:self.program(12, program12, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.apiConfig),stack1 == null || stack1 === false ? stack1 : stack1.displaycode), {hash:{},inverse:self.noop,fn:self.program(14, program14, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.hostedAuth, {hash:{},inverse:self.noop,fn:self.program(16, program16, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " "
    + " <input type=\"hidden\" name=\"sendemailalertwhenpublished\" class=\"bv-noremember bv-form-ignore\" value=\"true\"/> <input type=\"hidden\" name=\"sendemailalertwhencommented\" class=\"bv-noremember bv-form-ignore\" value=\"true\"/> <input type=\"hidden\" name=\"sendemailalertwhenanswered\" class=\"bv-noremember bv-form-ignore\" value=\"true\"/> ";
  options = {hash:{},inverse:self.noop,fn:self.program(20, program20, data)};
  stack2 = ((stack1 = helpers.ifHasFeature),stack1 ? stack1.call(depth0, "inlineProfile", depth0, options) : helperMissing.call(depth0, "ifHasFeature", "inlineProfile", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.formFields, {hash:{},inverse:self.noop,fn:self.program(23, program23, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </form> </div> ";
  return buffer;
  });
Handlebars.registerPartial('submissionForm', t);
t.deps = ["rejectionErrors","submissionFieldsComment","submissionFieldsQuestion","submissionFieldsAnswer","submissionFieldsReview","submissionFieldsUserInfo","submissionFieldCategory","submissionLegend","submissionInput","submissionLabel","agreementsReviews","agreementsQuestions"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!rejectionErrors',['hbs','vendor/handlebars/runtime', 'template/helpers/extmsg'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, options;
  buffer += " <li class=\"bv-submission-rejection-errors-list-item\"> ";
  options = {hash:{
    'prefix': ("error_ERROR_FORM_REJECTED_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, depth0, depth1.msgPack, depth1, options) : helperMissing.call(depth0, "extmsg", depth0, depth1.msgPack, depth1, options)))
    + " </li> ";
  return buffer;
  }

  buffer += "<div class=\"bv-submission-rejection-errors bv-focusable\"> <span class=\"bv-helper-icon\" aria-hidden=\"true\"> <span class=\"bv-helper-icon-negative\"> ✘ </span> </span> <span class=\"bv-submission-rejection-header-text\">";
  options = {hash:{
    'prefix': ("error_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "ERROR_FORM_REJECTED_HEADER", depth0.msgPack, depth0, options) : helperMissing.call(depth0, "extmsg", "ERROR_FORM_REJECTED_HEADER", depth0.msgPack, depth0, options)))
    + "</span> <ul class=\"bv-submission-rejection-errors-list\"> ";
  stack2 = helpers.each.call(depth0, depth0.rejectionErrors, {hash:{},inverse:self.noop,fn:self.programWithDepth(program1, data, depth0)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </ul> </div> ";
  return buffer;
  });
Handlebars.registerPartial('rejectionErrors', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!submissionFieldsComment',['hbs','vendor/handlebars/runtime','hbs!submissionField', 'template/helpers/submissionField'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-nocount"),
    'inputType': ("textarea"),
    'requiredWarning': ("bv-required-text")
  },inverse:self.noop,fn:self.program(2, program2, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "commenttext", depth0, depth1, options) : helperMissing.call(depth0, "submissionField", "commenttext", depth0, depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionField, 'submissionField', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, depth0.formFields, {hash:{},inverse:self.noop,fn:self.programWithDepth(program1, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('submissionFieldsComment', t);
t.deps = ["submissionField"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!submissionFieldsQuestion',['hbs','vendor/handlebars/runtime','hbs!submissionField', 'template/helpers/submissionField'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-nocount"),
    'inputType': ("textarea"),
    'requiredWarning': ("bv-required-text")
  },inverse:self.noop,fn:self.program(2, program2, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "questionsummary", depth0, depth1, options) : helperMissing.call(depth0, "submissionField", "questionsummary", depth0, depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionField, 'submissionField', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, depth0.formFields, {hash:{},inverse:self.noop,fn:self.programWithDepth(program1, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('submissionFieldsQuestion', t);
t.deps = ["submissionField"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!submissionFieldsAnswer',['hbs','vendor/handlebars/runtime','hbs!submissionLabel', 'hbs!submissionInput', 'template/helpers/submissionField'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-nocount"),
    'inputType': ("textarea"),
    'requiredWarning': ("bv-required-text")
  },inverse:self.noop,fn:self.program(2, program2, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "answertext", depth0, depth1, options) : helperMissing.call(depth0, "submissionField", "answertext", depth0, depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += " <fieldset class=\"bv-fieldset bv-fieldset-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " bv-";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-field ";
  if (stack2 = helpers.fieldsetClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.fieldsetClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> <div class=\"bv-fieldset-arrowicon\"></div> <div class=\"bv-fieldset-inner\"> ";
  stack2 = self.invokePartial(partials.submissionLabel, 'submissionLabel', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = self.invokePartial(partials.submissionInput, 'submissionInput', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> </fieldset> ";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, depth0.formFields, {hash:{},inverse:self.noop,fn:self.programWithDepth(program1, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('submissionFieldsAnswer', t);
t.deps = ["submissionLabel","submissionInput"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!submissionLegend',['hbs','vendor/handlebars/runtime','hbs!submissionHelper', 'template/helpers/extmsg', 'template/helpers/equals'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "*";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " <span class=\"bv-off-screen\">";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "placeholder_netpromoterscore", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "placeholder_netpromoterscore", depth0.msgpack, depth0, options)))
    + "</span> ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " <span class=\"bv-off-screen bv-fieldset-label-slider-left\">";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "offscreen_value_of_one_means", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "offscreen_value_of_one_means", depth0.msgpack, depth0, options)));
  options = {hash:{
    'prefix': ("slider_dimension_1_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth0.msgpack, depth0, options)))
    + "</span> <span class=\"bv-off-screen bv-fieldset-label-slider-right\">";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "offscreen_value_max_means", depth0.msgpack, depth0.dimsumField, options) : helperMissing.call(depth0, "extmsg", "offscreen_value_max_means", depth0.msgpack, depth0.dimsumField, options)));
  options = {hash:{
    'prefix': ("slider_dimension_2_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth0.msgpack, depth0, options)))
    + "</span> ";
  return buffer;
  }

  buffer += "<div class=\"bv-fieldset-label-wrapper\" id=\"bv-fieldset-label-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> <span class=\"bv-fieldset-label\"> <span class=\"bv-fieldset-label-text\" id=\"bv-fieldset-label-text-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> ";
  options = {hash:{
    'prefix': ("display_"),
    'defaultDisplay': (((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Label))
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth0.msgpack, depth0, options)));
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.validation),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), "netpromoterscore", options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), "netpromoterscore", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </span> "
    + " <span aria-hidden=\"false\" class=\"bv-off-screen bv-field-aria-validation\" id=\"bv-field-aria-validation-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span> ";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.dimsumField),stack1 == null || stack1 === false ? stack1 : stack1.type), "SLIDER", options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.dimsumField),stack1 == null || stack1 === false ? stack1 : stack1.type), "SLIDER", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </span> </div> ";
  stack2 = self.invokePartial(partials.submissionHelper, 'submissionHelper', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('submissionLegend', t);
t.deps = ["submissionHelper"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!submissionFieldRadio',['hbs','vendor/handlebars/runtime','hbs!submissionLegend', 'hbs!submissionInput'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<fieldset class=\"bv-fieldset bv-fieldset-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " bv-";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-field ";
  if (stack2 = helpers.fieldsetClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.fieldsetClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> ";
  stack2 = self.invokePartial(partials.submissionLegend, 'submissionLegend', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <span class=\"bv-fieldset-arrowicon\"></span> <span class=\"bv-fieldset-inner\"> ";
  stack2 = self.invokePartial(partials.submissionInput, 'submissionInput', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </span> </fieldset> ";
  return buffer;
  });
Handlebars.registerPartial('submissionFieldRadio', t);
t.deps = ["submissionLegend","submissionInput"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START GENERATED MESSAGE */
BV.define('_i18n_reviewPhotoMaxCount', ['vendor/messageformat', 'vendor/handlebars/runtime', 'underscore', 'framework/util/bvtrackerqueue'], function (MessageFormat, Handlebars, _, BVTrackerQueue) {
function reviewPhotoMaxCount( data ) {
try { return (function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "maxPhotos";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "Add up to ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["maxPhotos"];
r += " photo";
return r;
},
"other" : function(d){
var r = "";
r += "Add up to ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["maxPhotos"];
r += " photos";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
return r;
})(data); } catch(e) { BVTrackerQueue.push( [ 'error', new Error('MF error on `reviewPhotoMaxCount`: ' + e.toString() ) ] ); return ''; }
}
Handlebars.registerHelper('_i18n_reviewPhotoMaxCount', function () {
var data = {};
var args = [].slice.call( arguments, 0, arguments.length-1 );
_(args).forEach(function (arg) {
  _.extend(data, arg);
});
return reviewPhotoMaxCount(data);
});
return reviewPhotoMaxCount;
});
/* END GENERATED MESSAGE */;
/* START GENERATED MESSAGE */
BV.define('_i18n_reviewPhotoRemainingCount', ['vendor/messageformat', 'vendor/handlebars/runtime', 'underscore', 'framework/util/bvtrackerqueue'], function (MessageFormat, Handlebars, _, BVTrackerQueue) {
function reviewPhotoRemainingCount( data ) {
try { return (function(d){
var r = "";
r += "(";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "remainingPhotos";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["remainingPhotos"];
r += " remaining ";
return r;
},
"other" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["remainingPhotos"];
r += " remaining ";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ")";
return r;
})(data); } catch(e) { BVTrackerQueue.push( [ 'error', new Error('MF error on `reviewPhotoRemainingCount`: ' + e.toString() ) ] ); return ''; }
}
Handlebars.registerHelper('_i18n_reviewPhotoRemainingCount', function () {
var data = {};
var args = [].slice.call( arguments, 0, arguments.length-1 );
_(args).forEach(function (arg) {
  _.extend(data, arg);
});
return reviewPhotoRemainingCount(data);
});
return reviewPhotoRemainingCount;
});
/* END GENERATED MESSAGE */;
/* START_TEMPLATE */
BV.define('hbs!reviewPhotoCounts',['hbs','vendor/handlebars/runtime', '_i18n_reviewPhotoMaxCount', '_i18n_reviewPhotoRemainingCount'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " "
    + " ";
  options = {hash:{}};
  stack2 = ((stack1 = helpers._i18n_reviewPhotoRemainingCount),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "_i18n_reviewPhotoRemainingCount", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }

  buffer += " "
    + " "
    + " ";
  options = {hash:{}};
  stack2 = ((stack1 = helpers._i18n_reviewPhotoMaxCount),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "_i18n_reviewPhotoMaxCount", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = helpers['if'].call(depth0, depth0.remainingPhotos, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('reviewPhotoCounts', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
BV.define('template/helpers/ifInSchema',['vendor/handlebars/runtime', 'underscore'], function (Handlebars, _) {

  // Shows a block of content only if a given field name exists in a
  // submission schema.
  function ifInSchema (names, context, options) {
    var fieldNames = names.split(',');
    var findField = _(fieldNames).find(function (fieldName) {
      var data = context[fieldName];
      return (!Handlebars.Utils.isEmpty(data) && data.enabled);
    });

    if (!_(findField).isUndefined()) {
      return options.fn(context);
    } else {
      return options.inverse(context);
    }
  }

  Handlebars.registerHelper('ifInSchema', ifInSchema);
  return ifInSchema;
});

/* START_TEMPLATE */
BV.define('hbs!submissionFieldsReview',['hbs','vendor/handlebars/runtime','hbs!submissionField', 'hbs!submissionFieldRadio', 'hbs!submissionInput', 'hbs!reviewPhotoCounts', 'template/helpers/ifHasFeature', 'template/helpers/submissionField', 'template/helpers/extmsg', 'template/helpers/renderIcon', 'template/helpers/mountView', 'template/helpers/conditionalContainer', 'template/helpers/ifInSchema'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " "
    + " ";
  options = {hash:{},inverse:self.program(7, program7, data),fn:self.program(2, program2, data)};
  stack2 = ((stack1 = helpers.ifHasFeature),stack1 ? stack1.call(depth0, "submissionReviewTitleInputFirst", depth1, options) : helperMissing.call(depth0, "ifHasFeature", "submissionReviewTitleInputFirst", depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-nocount")
  },inverse:self.noop,fn:self.programWithDepth(program9, data, depth0, depth1)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "reviewtext", depth0, depth1, options) : helperMissing.call(depth0, "submissionField", "reviewtext", depth0, depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-nocount"),
    'inputClasses': ("bv-focusable")
  },inverse:self.noop,fn:self.program(5, program5, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "isrecommended", depth0, depth1, options) : helperMissing.call(depth0, "submissionField", "isrecommended", depth0, depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-fieldset-active bv-nocount")
  },inverse:self.noop,fn:self.program(3, program3, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "title", depth0.formFields, depth0, options) : helperMissing.call(depth0, "submissionField", "title", depth0.formFields, depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': (""),
    'inputClasses': ("bv-required"),
    'numHelpers': ("1"),
    'requiredWarning': ("bv-required-text")
  },inverse:self.noop,fn:self.program(5, program5, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "rating", depth0.formFields, depth0, options) : helperMissing.call(depth0, "submissionField", "rating", depth0.formFields, depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionField, 'submissionField', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionFieldRadio, 'submissionFieldRadio', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-fieldset-active"),
    'inputClasses': ("bv-required"),
    'numHelpers': ("1"),
    'requiredWarning': ("bv-required-text")
  },inverse:self.noop,fn:self.program(5, program5, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "rating", depth0.formFields, depth0, options) : helperMissing.call(depth0, "submissionField", "rating", depth0.formFields, depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-nocount")
  },inverse:self.noop,fn:self.program(3, program3, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, "title", depth0.formFields, depth0, options) : helperMissing.call(depth0, "submissionField", "title", depth0.formFields, depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }

function program9(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " <fieldset class=\"bv-fieldset bv-focusable bv-fieldset-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " bv-";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-field ";
  if (stack2 = helpers.fieldsetClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.fieldsetClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" tabindex=\"0\"> <div class=\"bv-fieldset-arrowicon\"></div> <div class=\"bv-fieldset-inner\"> <label for=\"bv-textarea-field-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-fieldset-label-wrapper\"> <span class=\"bv-fieldset-label\" aria-describedby=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_validation\"> <span class=\"bv-fieldset-label-text\"> ";
  options = {hash:{
    'prefix': ("display_"),
    'defaultDisplay': (((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Label))
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth0.msgpack, depth0, options)));
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.validation),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(10, program10, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </span> "
    + " <span id=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "_validation\" aria-hidden=\"false\" class=\"bv-off-screen bv-field-aria-validation\"></span> </span> </label> <span class=\"bv-helper\"> <span class=\"bv-helper-label\" role=\"status\" aria-live=\"polite\"> </span> <span class=\"bv-helper-icon\" aria-hidden=\"true\"> <span class=\"bv-helper-icon-positive\">";
  options = {hash:{},inverse:self.noop,fn:self.program(12, program12, data)};
  stack2 = ((stack1 = helpers.renderIcon),stack1 ? stack1.call(depth0, "bv-helper-icon-positive", options) : helperMissing.call(depth0, "renderIcon", "bv-helper-icon-positive", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span> <span class=\"bv-helper-icon-negative\">";
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data)};
  stack2 = ((stack1 = helpers.renderIcon),stack1 ? stack1.call(depth0, "bv-helper-icon-negative", options) : helperMissing.call(depth0, "renderIcon", "bv-helper-icon-negative", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span> </span> </span> <div class=\"bv-review-field-content-wrapper\"> ";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.mountView),stack1 ? stack1.call(depth0, "socialConnectSmall", depth2, options) : helperMissing.call(depth0, "mountView", "socialConnectSmall", depth2, options)))
    + " ";
  stack2 = self.invokePartial(partials.submissionInput, 'submissionInput', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " "
    + " <div class=\"bv-review-media bv-thumbnail-strip\"> "
    + " "
    + " </div> ";
  options = {hash:{
    'tag': ("div"),
    'classList': ("review-media")
  },inverse:self.noop,fn:self.programWithDepth(program16, data, depth1)};
  stack2 = ((stack1 = helpers.conditionalContainer),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "conditionalContainer", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> </div> </fieldset> ";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "*";
  }

function program12(depth0,data) {
  
  
  return " &#x2714; ";
  }

function program14(depth0,data) {
  
  
  return " &#x2718; ";
  }

function program16(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'tag': ("div"),
    'classList': ("review-media-actions")
  },inverse:self.noop,fn:self.programWithDepth(program17, data, depth2)};
  stack2 = ((stack1 = helpers.conditionalContainer),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "conditionalContainer", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program17(depth0,data,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program18, data, depth0)};
  stack2 = ((stack1 = helpers.ifInSchema),stack1 ? stack1.call(depth0, "photourl_1", depth3, options) : helperMissing.call(depth0, "ifInSchema", "photourl_1", depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program20, data, depth0)};
  stack2 = ((stack1 = helpers.ifInSchema),stack1 ? stack1.call(depth0, "videourl_1", depth3, options) : helperMissing.call(depth0, "ifInSchema", "videourl_1", depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program22, data, depth0)};
  stack2 = ((stack1 = helpers.ifInSchema),stack1 ? stack1.call(depth0, "photourl_1", depth3, options) : helperMissing.call(depth0, "ifInSchema", "photourl_1", depth3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program18(depth0,data,depth1) {
  
  var buffer = "", stack1, options;
  buffer += " <button type=\"button\" class=\"bv-content-btn bv-btn-add-photo bv-popup-target bv-focusable\" aria-describedby=\"add-photo-button-description\"> <span>";
  options = {hash:{
    'prefix': ("add_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "photo", depth1.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "photo", depth1.msgpack, depth0, options)))
    + "</span> </button> ";
  return buffer;
  }

function program20(depth0,data,depth1) {
  
  var buffer = "", stack1, options;
  buffer += " <button type=\"button\" class=\"bv-content-btn bv-btn-add-video bv-focusable\"> ";
  options = {hash:{
    'prefix': ("add_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "video", depth1.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "video", depth1.msgpack, depth0, options)))
    + " </button> ";
  return buffer;
  }

function program22(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += " <span id=\"add-photo-button-description\" aria-hidden=\"true\" class=\"bv-review-photo-actions-label\"> ";
  stack1 = self.invokePartial(partials.reviewPhotoCounts, 'reviewPhotoCounts', depth1.rawData, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </span> ";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, depth0.formFields, {hash:{},inverse:self.noop,fn:self.programWithDepth(program1, data, depth0)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('submissionFieldsReview', t);
t.deps = ["submissionField","submissionFieldRadio","submissionInput","reviewPhotoCounts"];
t.tplMountedViews = ['socialConnectSmall'];
return t;
});
/* END_TEMPLATE */
;
BV.define('template/helpers/submissionFields',['vendor/handlebars/runtime', 'underscore', 'template/helpers/submissionField'], function (Handlebars, _, submissionField) {

  function submissionFields (fields, context) {
    var results = '';
    var args = [].slice.call(arguments);
    var options = args[args.length - 1];
    var hashCopy = _(options.hash).clone();
    var fieldNames = fields.split(' ');
    var visibleFields = [];

    options.hash.fieldsetClasses = options.hash.fieldsetClasses || '';

    // Render all the hidden ones first
    _(fieldNames).forEach(function (field) {
      var data = context[field];
      if (data) {
        if (data.hidden) {
          args[0] = field;
          results += submissionField.apply({}, args);
        } else {
          visibleFields.push(field);
        }
      }
    });

    // Then render the rest with the appropriate classes
    _(visibleFields).forEach(function (field, index) {
      var isLast = (index + 1) === visibleFields.length;
      // Last one and odd
      var isAlone = isLast && (index % 2 === 0);

      options.hash = _(hashCopy).clone();

      // This is used to allow the handlebars template to pass this helper specific input classes
      // and input types to specific fields. For example, for an email field, a template could
      // pass this helper email 'emailField-inputType'="email". This is input class would ONLY
      // be applied to the field called 'emailField'.
      if (options.hash.smallClass) {
        options.hash.fieldsetClasses += ' ' + options.hash.smallClass + (isAlone ? '-alone' : '');
      }

      if (options.hash[field + '-inputClasses']) {
        options.hash.inputClasses = options.hash[field + '-inputClasses'];
      }

      if (options.hash[field + '-inputType']) {
        options.hash.inputType = options.hash[field + '-inputType'];
      }

      args[0] = field;
      results += submissionField.apply({}, args);
    });

    return results;
  }

  Handlebars.registerHelper('submissionFields', submissionFields);
  return submissionFields;
});

/* START_TEMPLATE */
BV.define('hbs!submissionFieldsUserInfo',['hbs','vendor/handlebars/runtime','hbs!submissionField', 'template/helpers/submissionFields'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-nocount"),
    'smallClass': ("bv-fieldset-small"),
    'emailField-inputClasses': ("bv-email"),
    'emailField-inputType': ("email")
  },inverse:self.noop,fn:self.program(2, program2, data)};
  stack2 = ((stack1 = helpers.submissionFields),stack1 ? stack1.call(depth0, "usernickname userlocation emailField", depth0, depth1, options) : helperMissing.call(depth0, "submissionFields", "usernickname userlocation emailField", depth0, depth1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionField, 'submissionField', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, depth0.formFields, {hash:{},inverse:self.noop,fn:self.programWithDepth(program1, data, depth0)});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
Handlebars.registerPartial('submissionFieldsUserInfo', t);
t.deps = ["submissionField"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!submissionTagGroup',['hbs','vendor/handlebars/runtime','hbs!submissionHelper', 'template/helpers/extmsg'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " <li class=\"bv-radio-container-li\" role=\"option\"> <label class=\"bv-radio-wrapper-label\" for=\"bv-checkbox-";
  if (stack1 = helpers.parentSchemaId) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.parentSchemaId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.tagIndex) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.tagIndex; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> <span class=\"bv-radio-container-icon\" aria-hidden=\"true\">+</span> <span class=\"bv-off-screen\">";
  options = {hash:{
    'prefix': ("display_"),
    'defaultDisplay': (depth0.label)
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, depth0.parentSchemaId, depth1.msgpack, depth1, options) : helperMissing.call(depth0, "extmsg", depth0.parentSchemaId, depth1.msgpack, depth1, options)))
    + ".</span> <input id=\"bv-checkbox-";
  if (stack2 = helpers.parentSchemaId) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.parentSchemaId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-";
  if (stack2 = helpers.tagIndex) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.tagIndex; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-radio-input bv-focusable ";
  if (stack2 = helpers.inputClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.inputClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" type=\"checkbox\" tabindex=\"0\" value=\"true\"/>"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " </label> </li> ";
  return buffer;
  }

  buffer += "<fieldset class=\"bv-fieldset bv-fieldset-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " bv-";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-field bv-fieldset-tags bv-radio-field bv-nocount\"> <div class=\"bv-fieldset-label-wrapper\"> <span class=\"bv-fieldset-label\"> <span class=\"bv-fieldset-label-text\" id=\"bv-fieldset-label-text-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  options = {hash:{
    'prefix': ("display_"),
    'defaultDisplay': (depth0.label)
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, depth0.id, depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", depth0.id, depth0.msgpack, depth0, options)))
    + "</span> </span> "
    + " <span aria-hidden=\"false\" class=\"bv-off-screen bv-field-aria-validation\"></span> </div> <div class=\"bv-fieldset-arrowicon\"></div> <div class=\"bv-fieldset-inner\"> ";
  stack2 = self.invokePartial(partials.submissionHelper, 'submissionHelper', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <div class=\"bv-fieldset-radio-wrapper\"> <ul class=\"bv-fieldset-tags-group bv-radio-group\" role=\"listbox\" aria-labelledby=\"bv-fieldset-label-text-";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> ";
  stack2 = helpers.each.call(depth0, depth0.tags, {hash:{},inverse:self.noop,fn:self.programWithDepth(program1, data, depth0)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </ul> </div> </div> </fieldset> ";
  return buffer;
  });
Handlebars.registerPartial('submissionTagGroup', t);
t.deps = ["submissionHelper"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!submissionFieldCategory',['hbs','vendor/handlebars/runtime','hbs!submissionField', 'hbs!submissionFieldRadio', 'hbs!submissionLabel', 'hbs!submissionInput', 'hbs!submissionTagGroup', 'template/helpers/foreach', 'template/helpers/equals', 'template/helpers/submissionField'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program2, data, depth0)};
  stack2 = ((stack1 = helpers.foreach),stack1 ? stack1.call(depth0, depth0.orderedFormFields, options) : helperMissing.call(depth0, "foreach", depth0.orderedFormFields, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "HiddenInput", options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "HiddenInput", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program6, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "SelectInput", options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "SelectInput", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program13, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "TextInput", options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "TextInput", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "TextAreaInput", options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "TextAreaInput", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "TagGroup", options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "TagGroup", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(program20, data, depth1)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "IntegerInput", options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Type), "IntegerInput", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth2.formFields, depth2.rawData, options) : helperMissing.call(depth0, "submissionField", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth2.formFields, depth2.rawData, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionField, 'submissionField', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program6(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{},inverse:self.programWithDepth(program11, data, depth0, depth2),fn:self.programWithDepth(program7, data, depth0, depth2)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.dimsumField),stack1 == null || stack1 === false ? stack1 : stack1.type), "SLIDER", options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.dimsumField),stack1 == null || stack1 === false ? stack1 : stack1.type), "SLIDER", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program7(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-fieldset-slider-rating"),
    'inputClasses': ("bv-radio-input bv-sliderscore-input")
  },inverse:self.noop,fn:self.program(8, program8, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, ((stack1 = depth1.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth3.formFields, depth3.rawData, options) : helperMissing.call(depth0, "submissionField", ((stack1 = depth1.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth3.formFields, depth3.rawData, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.radio, {hash:{},inverse:self.noop,fn:self.program(9, program9, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionFieldRadio, 'submissionFieldRadio', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program11(depth0,data,depth1,depth3) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, ((stack1 = depth1.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth3.formFields, depth3.rawData, options) : helperMissing.call(depth0, "submissionField", ((stack1 = depth1.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth3.formFields, depth3.rawData, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }

function program13(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{},inverse:self.noop,fn:self.program(14, program14, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth2.formFields, depth2.rawData, options) : helperMissing.call(depth0, "submissionField", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth2.formFields, depth2.rawData, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(15, program15, data)};
  stack2 = ((stack1 = helpers.equals),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.MaxLength), 35, options) : helperMissing.call(depth0, "equals", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.MaxLength), 35, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += " <fieldset class=\"bv-fieldset bv-fieldset-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " bv-";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-field ";
  if (stack2 = helpers.fieldsetClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.fieldsetClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " bv-nocount bv-fieldset-small-alone\"> <div class=\"bv-fieldset-arrowicon\"></div> <div class=\"bv-fieldset-inner\"> ";
  stack2 = self.invokePartial(partials.submissionLabel, 'submissionLabel', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  stack2 = self.invokePartial(partials.submissionInput, 'submissionInput', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> </fieldset> ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers.unless.call(depth0, depth0.hidden, {hash:{},inverse:self.noop,fn:self.program(18, program18, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionTagGroup, 'submissionTagGroup', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

function program20(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " ";
  options = {hash:{
    'fieldsetClasses': ("bv-fieldset-secondary-rating"),
    'inputClasses': ("bv-rating-input bv-secondary-rating-input"),
    'numHelpers': ("1")
  },inverse:self.noop,fn:self.program(8, program8, data)};
  stack2 = ((stack1 = helpers.submissionField),stack1 ? stack1.call(depth0, ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth2.formFields, depth2.rawData, options) : helperMissing.call(depth0, "submissionField", ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id), depth2.formFields, depth2.rawData, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('submissionFieldCategory', t);
t.deps = ["submissionField","submissionFieldRadio","submissionLabel","submissionInput","submissionTagGroup"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!agreementsReviews',['hbs','vendor/handlebars/runtime','hbs!submissionHelper'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<fieldset class=\"bv-fieldset bv-fieldset-agreements bv-fieldset-reviews-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " bv-";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-field ";
  if (stack2 = helpers.fieldsetClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.fieldsetClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> <div class=\"bv-fieldset-arrowicon\"></div> <div class=\"bv-fieldset-inner\"> <div class=\"bv-checkbox-container\"> <input id=\"bv-checkbox-reviews-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"agreements_reviews_"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-checkbox bv-focusable ";
  if (stack2 = helpers.inputClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.inputClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" type=\"checkbox\" value=\"true\" aria-required=\"true\"/> <label class=\"bv-fieldset-label-checkbox\" for=\"bv-checkbox-reviews-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> <span class=\"bv-fieldset-label-text\">";
  if (stack2 = helpers.submissionTitle) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.submissionTitle; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span> "
    + " <span aria-hidden=\"false\" class=\"bv-off-screen bv-field-aria-validation\"></span> </label> </div> ";
  stack2 = self.invokePartial(partials.submissionHelper, 'submissionHelper', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> </fieldset> ";
  return buffer;
  });
Handlebars.registerPartial('agreementsReviews', t);
t.deps = ["submissionHelper"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!agreementsQuestions',['hbs','vendor/handlebars/runtime','hbs!submissionHelper'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<fieldset class=\"bv-fieldset bv-fieldset-agreements bv-fieldset-questions-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " bv-";
  if (stack2 = helpers.type) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.type; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-field ";
  if (stack2 = helpers.fieldsetClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.fieldsetClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> <div class=\"bv-fieldset-arrowicon\"></div> <div class=\"bv-fieldset-inner\"> <div class=\"bv-checkbox-container\"> <input id=\"bv-checkbox-questions-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"agreements_questions_"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-checkbox bv-focusable ";
  if (stack2 = helpers.inputClasses) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.inputClasses; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" type=\"checkbox\" value=\"true\" aria-required=\"true\"/> <label class=\"bv-fieldset-label-checkbox\" for=\"bv-checkbox-questions-"
    + escapeExpression(((stack1 = ((stack1 = depth0.schema),stack1 == null || stack1 === false ? stack1 : stack1.Id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> <span class=\"bv-fieldset-label-text\">";
  if (stack2 = helpers.submissionTitle) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.submissionTitle; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span> "
    + " <span aria-hidden=\"false\" class=\"bv-off-screen bv-field-aria-validation\"></span> </label> </div> ";
  stack2 = self.invokePartial(partials.submissionHelper, 'submissionHelper', depth0, helpers, partials);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> </fieldset> ";
  return buffer;
  });
Handlebars.registerPartial('agreementsQuestions', t);
t.deps = ["submissionHelper"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!submissionBase',['hbs','vendor/handlebars/runtime','hbs!submissionForm', 'template/helpers/view'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.submissionForm, 'submissionForm', depth0, helpers, partials);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

  buffer += " ";
  options = {hash:{
    'tag': ("div"),
    'classList': ("submission")
  },inverse:self.noop,fn:self.program(1, program1, data)};
  stack2 = ((stack1 = helpers.view),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "view", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('submissionBase', t);
t.deps = ["submissionForm"];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/* START_TEMPLATE */
BV.define('hbs!slider',['hbs','vendor/handlebars/runtime'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  


  return "<span class=\"bv-sliderdot\" aria-hidden=\"true\">&#9679;</span> <span class=\"bv-sliderbar\" aria-hidden=\"true\"></span> ";
  });
Handlebars.registerPartial('slider', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
BV.define('mf!bv/c2013/messages/janrain',['vendor/messageformat', 'framework/util/bvtrackerqueue'], function (MessageFormat, BVTrackerQueue) { 
  return {
"janrain_error_try_again" : function (x) { try { return (function(d){
var r = "";
r += "We're sorry, something went wrong. Please try again.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `janrain_error_try_again`: ' + e.toString() ) ] ); return ""; } }
};
});

/*global janrain:true, alert:false*/
BV.define('bv/util/janrain',['ENV', 'jquery', 'underscore', 'window', 'bv/api/fetch', 'util/url', 'mf!bv/c2013/messages/janrain'], function (ENV, $, _, window, api, Url, msgPack) {

  var janrainDfd = $.Deferred();
  var janrainEngageLoaded = $.Deferred();
  var janrainWidgetLoaded = $.Deferred();
  var ENVConfig = ENV.get('config');
  var janrainKey;
  var janrainDomain;
  var loginCache = {};

  function janrainUrl (file) {
    return (Url.protocol === 'https:' ? 'https://rpxnow.com' : 'http://widget-cdn.rpxnow.com') + '/js/lib/' + janrainDomain + '/' + file;
  }

  $.when(janrainEngageLoaded, janrainWidgetLoaded).done(function () {
    janrainDfd.resolve(window.janrain);
  });

  var loadJanrain = _.once(function () {

    if (typeof window.janrain !== 'object') {
      window.janrain = {};
    }

    if (typeof window.janrain.settings !== 'object') {
      window.janrain.settings = {};
    }

    if (typeof window.janrain.settings.share !== 'object') {
      window.janrain.settings.share = {};
    }

    if (typeof window.janrain.settings.packages !== 'object') {
      window.janrain.settings.packages = ['share'];
    }
    else {
      window.janrain.settings.packages.push('share');
    }

    window.janrain.settings.share.custom = true;
    window.janrain.settings.share.providers = ['facebook'];
    window.janrain.settings.tokenUrl = 'https://' + janrainDomain;
    window.janrain.settings.tokenAction = 'event';
    window.janrain.settings.appId = janrainKey;
    window.janrain.settings.appUrl = 'https://' + janrainDomain;
    window.janrain.settings.providers = ['facebook'];
    window.janrain.settings.custom = true;
    window.janrain.settings.facebookPermissions = janrain.settings.facebookPermissions || [];
    window.janrain.settings.facebookPermissions.push('user_photos');
    window.janrain.ready = true;

    // These are when I know Janrain has loaded all the way. Can't use success callback in $.ajax requests
    // below because JR makes additional async requests that I need to wait for (which these callbacks fulfill).
    window.janrainWidgetOnload = function () {
      janrainWidgetLoaded.resolve();
    };

    window.janrainShareOnload = function () {
      janrainEngageLoaded.resolve();
    };

    // JR doesn't provide both signin and share APIs in a single file. Need to load both of these, unfortunately.
    $.ajax({
      url: janrainUrl('engage.js'),
      dataType: 'script',
      cache: true
    });

    $.ajax({
      url: janrainUrl('widget.js'),
      dataType: 'script',
      cache: true
    });

  });

  try {
    if (ENVConfig.vendorConfig.janrain) {
      janrainKey = ENV.get('config').vendorConfig.janrain.key;
      janrainDomain = ENV.get('config').vendorConfig.janrain.domain;
    }
  } catch (e) {}

  function withJanrainAPI (fn) {
    if (janrainKey && janrainDomain) {
      loadJanrain();
      if (fn) {
        janrainDfd.done(fn);
      }
    }
  }

  function fetchSocialData (token) {
    var apiConfig = api._config;
    // One day, move this to bv/api.
    return $.ajax({
      url: 'https:' + apiConfig.baseUrl + 'janrain.json',
      dataType: 'jsonp',
      cache: true,
      data: {
        passkey: apiConfig.passkey,
        token: token,
        apiversion: apiConfig.apiversion,
        ve: apiConfig.virtualEnvironment || '',
        displaycode: apiConfig.displaycode || ''
      }
    });
  }

  function janrainShare (data, opts) {
    var shareDfd = $.Deferred();
    var loginDfd = $.Deferred();
    opts = opts || {};

    withJanrainAPI(function (janrain) {
      janrain.events.onShareSendComplete.addHandler(function (janrainData) {
        shareDfd.resolve(janrainData);
      });
      janrain.events.onShareLoginError.addHandler(function (errData) {
        loginDfd.reject(errData);
        shareDfd.reject(errData);
      });
      janrain.events.onShareSendError.addHandler(function (errData) {
        shareDfd.reject(errData);
      });

      if (opts.onLogin) {
        loginDfd.done(opts.onLogin);
        janrain.events.onShareLoginToken.addHandler(function (janrainData) {
          // Only fetch if our deferred is pending.
          // If it isn't, this is probably a handler for a previous failed attempt.
          if (loginDfd.state() === 'pending') {
            fetchSocialData(janrainData.token).done(function (socialData) {
              var data = socialData.Results[0];
              if (!socialData.hasErrors) {
                loginDfd.resolve(data);
              }
              else {
                loginDfd.reject(data);
              }
            });
          }
        });
      }

      janrain.engage.share.loginAndSend(data);
    });

    return shareDfd;
  }

  // This triggers a janrain signin to the given network (example: 'facebook'), then calls
  // the BV API to get the social data back with the Janrain access token.
  // Warning: if the Janrain API isn't already loaded, this will likely trigger a
  // pop-up window asynchronously, so it's recommended that you load the API beforehand
  // and only show the UI that triggers this function after it's loaded.
  function janrainLogin (network) {
    var loginDfd = $.Deferred();

    if (loginCache[network]) {
      return loginDfd.resolve(loginCache[network]).promise();
    }

    withJanrainAPI(function (janrain) {
      // Handle successfully getting token
      janrain.events.onProviderLoginToken.addHandler(function (janrainData) {
        // Only fetch if our deferred is pending.
        // If it isn't, this is probably a handler for a previous failed login attempt.
        if (loginDfd.state() === 'pending') {
          fetchSocialData(janrainData.token).done(function (socialData) {
            var data = socialData.Results[0];
            if (!socialData.hasErrors) {
              loginCache[network] = data;
              loginDfd.resolve(data);
            } else {
              loginDfd.reject(data);
            }
          });
        }
      });

      // Handle login error
      janrain.events.onProviderLoginError.addHandler(function (errorData) {
        if (loginDfd.state() === 'pending') {
          alert(msgPack.janrain_error_try_again());
          loginDfd.reject(errorData);
        }
      });

      janrain.engage.signin.triggerFlow(network);
    });

    return loginDfd.promise();
  }

  return {
    withAPI: withJanrainAPI,
    login: janrainLogin,
    share: janrainShare
  };
});

BV.define('util/isodate',[],function () {

  function pad (number) {
    var r = String(number);
    if (r.length === 1) {
      r = '0' + r;
    }
    return r;
  }

  return function (date) {
    date = date || new Date();

    return date.getUTCFullYear()
      + '-' + pad( date.getUTCMonth() + 1 )
      + '-' + pad( date.getUTCDate() )
      + 'T' + pad( date.getUTCHours() )
      + ':' + pad( date.getUTCMinutes() )
      + ':' + pad( date.getUTCSeconds() )
      + '.' + String( (date.getUTCMilliseconds() / 1000).toFixed(3) ).slice(2, 5)
      + 'Z';
  };
});

BV.define('mf!bv/c2013/messages/toolegit',['vendor/messageformat', 'framework/util/bvtrackerqueue'], function (MessageFormat, BVTrackerQueue) { 
  return {
"error_message_required" : function (x) { try { return (function(d){
var r = "";
r += "Required";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_message_required`: ' + e.toString() ) ] ); return ""; } },"error_message_required_aria" : function (x) { try { return (function(d){
var r = "";
r += "Error: Required.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_message_required_aria`: ' + e.toString() ) ] ); return ""; } },"error_message_required_agreements_aria" : function (x) { try { return (function(d){
var r = "";
r += "Error: Required. You must agree to Agreements";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_message_required_agreements_aria`: ' + e.toString() ) ] ); return ""; } },"error_message_minlength" : function (x) { try { return (function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "difference";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["difference"];
r += " character too short ";
return r;
},
"other" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["difference"];
r += " characters too short ";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_message_minlength`: ' + e.toString() ) ] ); return ""; } },"error_message_minlength_aria" : function (x) { try { return (function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "difference";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "Error: Value is ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["difference"];
r += " character too short ";
return r;
},
"other" : function(d){
var r = "";
r += "Error: Value is ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["difference"];
r += " characters too short ";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_message_minlength_aria`: ' + e.toString() ) ] ); return ""; } },"error_message_maxlength" : function (x) { try { return (function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "difference";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["difference"];
r += " character too long ";
return r;
},
"other" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["difference"];
r += " characters too long ";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_message_maxlength`: ' + e.toString() ) ] ); return ""; } },"error_message_maxlength_aria" : function (x) { try { return (function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "difference";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "Error: Value is ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["difference"];
r += " character too long ";
return r;
},
"other" : function(d){
var r = "";
r += "Error: Value is ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["difference"];
r += " characters too long ";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["en"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_message_maxlength_aria`: ' + e.toString() ) ] ); return ""; } },"error_invalid_email" : function (x) { try { return (function(d){
var r = "";
r += "Invalid email";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_invalid_email`: ' + e.toString() ) ] ); return ""; } },"error_invalid_email_aria" : function (x) { try { return (function(d){
var r = "";
r += "Error: The email address is invalid.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_invalid_email_aria`: ' + e.toString() ) ] ); return ""; } },"error_emoji" : function (x) { try { return (function(d){
var r = "";
r += "Emoji not allowed";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_emoji`: ' + e.toString() ) ] ); return ""; } },"error_emoji_aria" : function (x) { try { return (function(d){
var r = "";
r += "Error: This field cannot contain special characters like emoji.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `error_emoji_aria`: ' + e.toString() ) ] ); return ""; } },"message_characters_used_minlength" : function (x) { try { return (function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["count"];
r += " out of a minimum ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["minlength"];
r += " characters used";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `message_characters_used_minlength`: ' + e.toString() ) ] ); return ""; } },"message_characters_used_maxlength" : function (x) { try { return (function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["count"];
r += " of a possible ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["maxlength"];
r += " characters used";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `message_characters_used_maxlength`: ' + e.toString() ) ] ); return ""; } },"valid_field_input" : function (x) { try { return (function(d){
var r = "";
r += "Field input is valid.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `valid_field_input`: ' + e.toString() ) ] ); return ""; } }
};
});

/*jshint expr:true */
/*global console:false jQuery:false define:false */

BV.define('vendor/toolegit',[
  'jquery',
  'underscore',
  'bv/util/focusManager',
  'mf!bv/c2013/messages/toolegit',
  'window',
  'util/pixelsDisplayed'
], function (jQuery, _, FocusManager, msgpack, window, pixelsDisplayed) {

  /**
   * toolegit.js - Basic Form Validation
   * https://github.com/owiber/toolegit
   *
   * Copyright (c) 2012 Oliver Wong
   *
   * Inspired by:
   * jQuery Validation Plugin 1.9.0
   * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
   * http://docs.jquery.com/Plugins/Validation
   *
   * Dual licensed under the MIT and GPL licenses:
   *   http://www.opensource.org/licenses/mit-license.php
   *   http://www.gnu.org/licenses/gpl.html
   */

  ////
  //
  // NOTE: This script has been completely rewritten from Oliver's original.
  // Much of the original logic is fine; the purpose was to separate
  // validation logic from presentation logic so we could more easily change
  // how validation messages are displayed to the user. -APD
  //
  ////

  var context = {};

  (function ($, context) {

    function TooLegit ($form, options) {
      if (!$form || !$form.length) {
        return;
      }

      $form.prop('novalidate', 'novalidate');

      options = $.extend({}, DEFAULT_OPTIONS, options);

      var reporter = new Reporter($form, options);
      return new Validator(options, reporter);
    }

    // Validator
    // =========
    //
    // The validator does nothing but compare values to validation rules.
    //
    function Validator (options, reporter) {
      this.reporter = reporter;
      this.reporter.validator = this; // CIRCULAR REFERENCES FTW

      this.cache = {
        elementRules: {}
      };

      this.options = options;
      this.ruleSelectors = $.extend({}, DEFAULT_RULE_SELECTORS, options.ruleSelectors);
      this.rules = $.extend({}, DEFAULT_RULES, options.rules);

      // Seed the rules table.
      var self = this;
      this.reporter.$inputs.each(function (index, input) {
        self.rulesForElement( $(input) );
      });

      _( this.reporter.getElementNames() ).each(function (name, i) {
        if (this.rulesForName(name).minlength) {
          this.reporter.setCounter(name);
        }
      }, this);
    }

    var DEFAULT_OPTIONS = {
      ignore: ['.ignore'],
      onError: function () {},
      counter: function ($el, min) {
        return $.trim( $el.val() ).length;
      }
    };

    $.extend(Validator.prototype, {
      rulesForName: function (name) {
        return this.cache.elementRules[name] || {};
      },

      rulesForElement: function ($el) {
        var name = $el.prop('name');
        var elementRules = {};
        if (this.cache.elementRules[name]) {
          return this.cache.elementRules[name];
        }
        this.cache.elementRules[name] = {};
        _(this.ruleSelectors).each(function (rules, selector) {
          if ( $el.is(selector) ) {
            _(rules).each(function (param, rule) {
              this.cache.elementRules[name][rule] = param;
            }, this);
          }
        }, this);
        return elementRules;
      },

      count: function ($el) {
        var name = $el.prop('name');
        var rules = this.rulesForElement($el);
        var count = this.options.counter($el, rules.minlength || 0);

        if ( count < (rules.minlength || 0) ) {
          // Not long enough yet.
          return {
            error: 'minlength',
            count: count,
            minlength: rules.minlength,
            fieldName: name
          };
        } else if (rules.maxlength) {
          if ( count > rules.maxlength ) {
            // Invalid; too long.
            return {
              error: 'maxlength',
              count: count,
              maxlength: rules.maxlength,
              fieldName: name
            };
          } else {
            // Valid.
            return {
              success: true,
              count: count,
              fieldName: name
            };
          }
        } else {
          // Valid.
          return {
            success: true,
            count: count,
            fieldName: name
          };
        }
      },

      check: function ($el) {
        return this.reporter.check($el);
      },

      addRule : function (ruleName, ruleFn) {
        this.rules[ruleName] = ruleFn;
        return this;
      },

      removeRule : function (ruleName) {
        var self = this;
        var rules = $.isArray(ruleName) ? ruleName : [ruleName];
        _(rules).each(function (rule, index) {
          self.rules[rule] = function () { return false; };
        });
        return self;
      },

      addSelectorRules : function ($el, rules) {
        $.extend(this.rulesForElement($el), rules);
        return this;
      },

      removeSelectorRules : function ($el, rules) {
        var elementRules = this.rulesForElement($el);
        _(rules).each(function (rule, index) {
          delete elementRules[$.isArray(rules) ? rule : index];
        });
        return this;
      },

      validate: function ($el, $validationEl) {
        var rules = this.rulesForElement($el);
        var errors = [];

        if (typeof $validationEl === 'undefined') {
          $validationEl = $el;
        }

        _(rules).each(function(param, rule) {
          if (!this.rules[rule]) {
            return;
          }

          var ruleFailed = this.rules[rule]($validationEl, param, rules);
          if (ruleFailed) {
            errors.push(ruleFailed);
            this.options.onError.call(this, $el, rule);
          }
        }, this);

        return errors;
      },

      // To make server-side validation work with TooLegit, we:
      //
      // 1. Examine the server response to see which fields failed validation;
      // 2. Add a new client-side rule for each such field that will find the
      //    field invalid until it is blank;
      // 3. Force a validity check on only those elements, and focus the
      //    first invalid field.
      //
      // For that last step, we expose this method; otherwise we'd have to
      // re-validate the entire form just to get focus to move.
      //
      // CAVEAT:
      //
      // This method will assume that these elements are in document order,
      // and will focus the first one in the array. If that's not true, find
      // a way to sort them first.
      showInvalid: function (invalidElements) {
        this.reporter.showInvalid(invalidElements);
      }
    });


    // Reporter
    // ========
    //
    // Responsible for all the necessary DOM
    // manipulation/traversal/listening. It knows when to ask the validator
    // to validate things.
    //
    function Reporter ($form, options) {
      this.$form = $form;
      $form.prop('novalidate', 'novalidate');

      this.options = options;
      this.options.ignore = this.options.ignore.join(', ');
      this.$inputs = $form.find('input, button, textarea, select').not(this.options.ignore);

      this.handlers = $.extend({}, DEFAULT_HANDLERS, options.handlers);

      this.cache = {
        shouldShowErrors: {}
      };

      var namesTable = {};
      var self = this;
      this.$inputs.each(function (i, el) {
        var name = $(el).prop('name');
        if (!name) {
          return;
        }
        if (!namesTable[name]) {
          namesTable[name] = [];
        }
        namesTable[name].push(el);
      });

      this._namesTable = namesTable;
      this.names = _(namesTable).keys();

      this._setupEvents();
    }

    $.extend(Reporter.prototype, {
      _setupEvents: function () {
        var self = this;

        function checkEl (e) {
          var $el = $(e.currentTarget);
          var name = $el.prop('name');
          if (!name) {
            return;
          }
          if ( $el.is(self.options.ignore) ) {
            return;
          }

          var val = $.trim( $el.val() );

          // if (val.length === 0) {
          //   // The form field is empty. Remove all validation messages, both
          //   // good and bad.
          //   self.handlers.reset($el);
          //   delete self.cache.shouldShowErrors[name];
          // }

          if (e.type === 'paste' || e.type === 'keyup' || e.type === 'focusin') {
            // Schedule a counter check.
            _.delay(function () { self.count($el); }, 20);
          }

          if (e.type === 'focusout' || e.type === 'change' || name in self.cache.shouldShowErrors) {
            // Schedule a validity check.
            _.delay(function () { self.check($el); }, 20);
          }
        }

        this.$form.on('paste focusin focusout keyup', '[type=text], input[type=checkbox][name^=agreements], [type=password], [type=file], [type=email], select, textarea', checkEl);
        this.$form.on('paste change', '[type=radio], [type=checkbox], select, option', checkEl);

        this.$form.submit(function (e) {
          self.options.preSubmit.call(self, e);

          // First, go through all inputs and ensure they're all valid.
          if ( !self.valid() ) {
            return false;
          }

          // If so, and there's a submit callback, assume it's going to
          // handle submission, and prevent the default behavior.
          if (self.options.submit) {
            self.options.submit.call(self, self.$form[0]);
            return false;
          }

          // Otherwise, submission can go through.
          return true;
        });
      },

      getElementNames: function () {
        return this.names;
      },

      getElementsByName: function (name) {
        return this._namesTable[name];
      },

      // Sets the initial counter state on text fields.
      setCounter: function (name, options) {
        _( this.getElementsByName(name) ).each(function (el, i) {
          this.count( $(el) );
        }, this);
      },

      // Checks the character count of a single field.
      count: function ($el) {
        var name   = $el.prop('name');
        var result = this.validator.count($el);

        var rules = this.validator.rulesForElement($el);
        var count = this.options.counter($el, rules.minlength || 0);

        if (result.error) {
          if (result.error === 'minlength') {
            // Minlength "errors" should be handled like messages, since the
            // user is still typing in the field.
            delete this.cache.shouldShowErrors[name];
            this.handlers.counterMessage($el, result);
          } else {
            // Invalid.
            this.handlers.counterError($el, result);
          }
        } else {
          // Valid.
          this.handlers.counterSuccess($el, result);
        }
      },

      // Tests the validity of a single element.
      check: function ($el) {
        $el = $( $el );
        var self = this;
        var name = $el.prop('name');
        var $validationEl = $el;

        // Only validate elements with names.
        if (!name) {
          return true;
        }

        if ( $el.is('[type=radio], [type=checkbox]') ) {
          // Checkboxes and radio buttons can have multiple elements with the
          // same name. Find the one we need.
          $validationEl = this.$form.find('[name="' + name + '"]').filter(':checked');
        }

        // We pass in both `$el` and `$validationEl`. The former is needed to
        // look up the validation rules. The latter is needed for the actual
        // validity test. (`$validationEl` can be an empty collection).
        var errors = this.validator.validate($el, $validationEl);

        // Now that the user has visited this field, it's fair game for
        // errors.
        //
        // TODO: Should we do this all the time, even when the field is
        // valid? Or should we just do it when the field is invalid, then
        // remove it when it's valid?
        self.cache.shouldShowErrors[name] = true;

        if (errors.length > 0) {
          self.cache.shouldShowErrors[name] = true;
          this.handlers.error($el, errors);
          return false;
        } else {
          delete self.cache.shouldShowErrors[name];
          this.handlers.success($el);
          return true;
        }
      },

      // Tests the validity of the entire form.
      valid : function () {
        var self = this;
        var valid = true;
        var invalids = [];
        self.$inputs.each(function (index, input) {
          var isValidField = self.check(input);
          if (!isValidField) {
            invalids.push(input);
          }
          valid = isValidField && valid;
        });
        if (!valid) {
          this.handlers.showInvalid( $(invalids) );
        }
        return valid;
      },

      showInvalid: function (invalidElements) {
        this.handlers.showInvalid( $(invalidElements) );
      }

    });

    var DEFAULT_RULES = {
      required: function ($el, isRequired) {
        var name = $el.prop('name');
        var noValue = $el.is('[type=radio], [type=checkbox]') ? !$el.length : !$.trim( $el.val() );
        if (isRequired && noValue) {
          return { type: 'required', fieldName: name };
        } else {
          return false;
        }
      },

      minlength: function ($el, min, otherRules) {
        var name = $el.prop('name');
        var length = $.trim( $el.val() ).length;
        if (!otherRules.required && length === 0) {
          return false;
        }
        var diff = min - length;
        if (diff > 0) {
          return {
            type: 'minlength',
            difference: diff,
            minlength: min,
            fieldName: name
          };
        } else {
          return false;
        }
      },

      maxlength: function ($el, max) {
        var name = $el.prop('name');
        var diff = $.trim( $el.val() ).length - max;
        if (diff > 0) {
          return {
            type: 'maxlength',
            difference: diff,
            maxlength: max,
            fieldName: name
          };
        } else {
          return false;
        }
      }
    };

    var DEFAULT_RULE_SELECTORS = {};


    ////
    //
    // NOTE: Below this line is stuff that is not core to TooLegit (as a
    // generic component), but is part of the specific task of validation on
    // a review submission form. Currently, that's all we use TooLegit for,
    // and it makes the code easier to grok if we put it here instead of in
    // submission.js. If we ever use TooLegit for other stuff, it'd probably
    // be best to move the submission-specific stuff into a different file.
    // -APD
    //
    ////


    // Each of these returns two properties. `message` is what will be seen
    // by sighted users. `aria` is what a screen reader will read aloud.
    var MESSAGES = {
      required: function (result) {
        return {
          message: msgpack.error_message_required(result),
          aria:    msgpack.error_message_required_aria(result),
          aria_agreements: msgpack.error_message_required_agreements_aria(result),
        };
      },

      minlength: function (result) {
        return {
          message: msgpack.error_message_minlength(result),
          aria:    msgpack.error_message_minlength_aria(result)
        };
      },

      maxlength: function (result) {
        return {
          message: msgpack.error_message_maxlength(result),
          aria:    msgpack.error_message_maxlength_aria(result)
        };
      },

      counter_message: function (result) {
        return {
          message: result.count + ' / ' + result.minlength,
          aria:    msgpack.message_characters_used_minlength(result)
        };
      },

      // For server-side validation errors, pass along the original message,
      // but annotate the ARIA message with the field label.
      server: function (result) {
        return {
          message: result.message,
          aria: result.label + ': ' + result.message
        };
      },

      /**
        * Display messaging for a counter validation success.
        *
        * @param  {Element} $el The element that went through validation
        * @param  {Object} result The result of that validation
        */
      counter_success : function (result) {
        return {
          message : '',
          aria : msgpack.valid_field_input(result)
        }
      },

      success : function (result) {
        return {
          message : '',
          aria : msgpack.valid_field_input(result)
        }
      }
    };

    // Handlers
    // ========
    //
    // The methods that turn the structured output into specific HTML.
    //
    var DEFAULT_HANDLERS = {
      _getLabel: function ($el) {
        var label = $el.data('toolegit-label');
        if (typeof label === 'undefined') {
          var $labelEl = $el.closest('.bv-fieldset').find('.bv-fieldset-label-text');
          if ($labelEl.length > 0) {
            label = $.trim( $labelEl.html().replace('*', '') );
          }
          $el.data('toolegit-label', label);
        }
        return label;
      },

      _getContainer: function ($el) {
        var $container = $el.data('toolegit-container');
        if (!$container) {
          $container = $el.closest('.bv-fieldset');
          $el.data('toolegit-container', $container);
        }
        return $container;
      },

      _getMessageElement: function ($el) {
        var $message = $el.data('toolegit-message');
        if (!$message) {
          var $container = this._getContainer($el);
          $message = $container.find('.bv-helper-label');
          $el.data('toolegit-message', $message);
        }
        return $message;
      },

      _getAriaElement: function ($el) {
        var $aria = $el.data('toolegit-aria');
        if (!$aria) {
          var $container = this._getContainer($el);
          $aria = $container.find('.bv-field-aria-validation');
          $el.data('toolegit-aria', $aria);
        }
        return $aria;
      },

      _updateMessage: function ($el, result, shouldAlert) {
        var $text = this._getMessageElement($el);
        var $aria = this._getAriaElement($el);

        // Find the field's label: a human-readable version of the field
        // name. If we can't find it, fall back to the field name.
        result.label = this._getLabel($el) || result.fieldName;

        // If the result has a type, and we have a message function for that
        // type, run it through. Otherwise, we'll assume that the result can
        // act like a message.
        var message = result.type && (result.type in MESSAGES) ? MESSAGES[result.type](result) : result;

        // We have two elements: one for displaying messages for sighted
        // users and one for messages that are read aloud by a screen reader.
        // Sometimes they display the same message, but sometimes they don't.
        var text = message.message;
        if ($el.attr('name').indexOf('agreements') > -1) {
          var aria = message.aria_agreements || text;
        }
        else {
          var aria = message.aria || text;
        }

        $text.html(text);
        $aria.html(aria);
      },

      // See CCS-30993.
      // _hasNoValue: function ($el) {
      //   var textWithNoLength = $el.is(':text, textarea, select') && $.trim( $el.val() ).length === 0;
      //   return textWithNoLength || $el.length === 0;
      // },

      _setValidity: function ($el, bool) {
        var $container = this._getContainer($el);
        // Remove value condition to normalize helpers behavior. See CCS-30993.
        // var validAndHasValue = bool && !this._hasNoValue($el);

        // Add valid class if it is valid 
        // Remove valid class if it is not valid
        $container.toggleClass(this.VALID_CLASS, bool);

        if (bool) {
          $el.removeAttr('aria-invalid');
        }
        else {
          $el.attr('aria-invalid', true);
        }
      },

      counterError: function ($el, result) {
        var $container = this._getContainer($el);

        // remove the 'no count class' and add the 'count class'
        $container.removeClass(this.NO_COUNT_CLASS).addClass(this.COUNT_CLASS);

        // add the 'long class' if the count is too long; otherwise remove it
        $container.toggleClass(this.LONG_CLASS, result.error === 'maxlength');

        result.type = result.error;

        this._updateMessage($el, result, true);

        $container.addClass(this.ERROR_CLASS);
      },

      counterMessage: function ($el, result) {
        var $container = this._getContainer($el);
        result.type = 'counter_message';

        this._updateMessage($el, result, false);
        $container.removeClass(this.ERROR_CLASS + ' ' + this.VALID_CLASS + ' ' +
          this.LONG_CLASS + ' ' + this.NO_COUNT_CLASS);
        $container.addClass(this.COUNT_CLASS);
      },

      counterSuccess: function ($el, result) {
        // Update the message element to be empty.
        // Display an aria success message
        result.type = 'counter_success';
        this._updateMessage($el, result, false);
        var $container = this._getContainer($el);

        // We remove the error class and the count class, but this won't get
        // marked as valid until the user moves focus elsewhere.
        $container.removeClass(this.ERROR_CLASS + ' ' + this.COUNT_CLASS + ' ' + this.LONG_CLASS);
        $container.addClass(this.NO_COUNT_CLASS);
      },

      error: function ($el, result) {
        // TODO: If there are multiple validation errors, should we present
        // them all to the user? Or is it OK to show just the first?
        if ( $.isArray(result) ) {
          result = result[0];
        }

        this._updateMessage($el, result, true);
        var $container = this._getContainer($el);

        this._setValidity($el, false);
        $container.removeClass(this.NO_COUNT_CLASS);
        $container.addClass(this.ERROR_CLASS);
      },

      /**
        * Display messaging for a validation success.
        *
        * @param  {Element} $el The element that went through validation
        * @param  {Object} result The result of that validation
        */
      success: function ($el, result) {
        this._updateMessage($el, { type : 'success' }, false);
        var $container = this._getContainer($el);

        this._setValidity($el, true);
        $container.removeClass(this.ERROR_CLASS);
      },

      reset: function ($el) {
        var $container = this._getContainer($el);
        // Remove all classes.
        this._updateMessage($el, { message: '' }, false);
        var classesToRemove = [this.ERROR_CLASS, this.VALID_CLASS];
        $container.removeClass( classesToRemove.join(' ') );
      },

      showInvalid: function ($invalids) {
        // Focus the first invalid elemenet.
        var $invalid = $invalids.first();
        var $elToFocus = $invalid;

        if ( $invalid.is('input[type="radio"]') ) {
          // We want to focus on the first element
          // that performs role of radio button 
          // Take wrap element of radio buttons, find all focusable childs
          // and take first of them 
          $elToFocus = $invalid.parents('.bv-radio-group').find('.bv-focusable').first();
        }

        // Defer this because we're almost certainly in an event responder,
        // and if we move focus now it can get moved elsewhere by other event
        // listeners (or default behavior).
        window.setTimeout(function () {
          FocusManager.moveFocus($elToFocus);

          var isVisible = pixelsDisplayed( $elToFocus.get(0) ) > 0;

          // Scroll window to show invalid field.
          // Most browsers scroll to the input that gets focused,
          // but this doesn't happen in mobile safari, so we scroll ourselves.
          if (!isVisible) {
            var $fieldset = $elToFocus.closest('.bv-fieldset.bv-error');

            if ($fieldset.length) {
              $(window).scrollTop($fieldset.offset().top);
            }
          }

          // HACK: An annoying issue in jQuery prevents us from focusing any
          // element that has a width of 0, even if it's visible, because our
          // version of jQuery uses width === 0 as a shorthand to test for
          // hiddenness, and it won't focus any element that it thinks is
          // hidden because IE doesn't like it.
          //
          // So we have to do this manually for now if we sense that this is a
          // false positive.
          //
          // TODO: Reinvestigate after we upgrade jQuery; we may no longer need
          // this.
          if ($elToFocus[0].offsetWidth === 0) {
            $elToFocus[0].focus();
          }
        }, 0);

      },

      ERROR_CLASS:    'bv-error',
      VALID_CLASS:    'bv-valid',
      LONG_CLASS:     'bv-long',
      COUNT_CLASS:    'bv-mincount',
      NO_COUNT_CLASS: 'bv-nocount'
    };


    context.TooLegit = TooLegit;
  })(jQuery, context);

  return context.TooLegit;

});



/**
 * @fileOverview A validation rule to give a quick check to email addresses.
 *
 * This is only a cursory look over. We still rely on server side validation
 * for full email validation.
 */
BV.define('util/emailValidationRule',[
  'mf!bv/c2013/messages/toolegit'
], function (
  msgpack
) {
  // This regex is meant to capture the very basic structure of a properly
  // formatted email address.
  var emailValidationRegex = /^.*@.*$/;

  return function ($el) {
    var name = $el.prop('name');
    var emailAddress = $el.val();

    // We allow the email address to be blank here. If the field is required,
    // that will be enforced by a separate validation rule. If email is not
    // required (as is the case with some site auth customers) we don't want
    // this rule to get in the way of a blank field.
    if (emailAddress === '') {
      return false;
    }

    var emailIsValid = emailValidationRegex.test(emailAddress);

    if (!emailIsValid) {
      return {
        fieldName : name,
        message : msgpack.error_invalid_email(),
        aria : msgpack.error_invalid_email_aria()
      };
    }
    else {
      return false;
    }
  };
});

/**
 * @fileOverview A module whose only purpose is detecting whether a given string contains characters outside of Unicode's Basic Multilingual Plane.
 */

// The name of this method is incorrect, but it's close enough to the actual
// problem. The correct name would not be as pithy and would be harder for
// future developers to grok.
//
// Some characters, are outside of Unicode's Basic Multilingual Plane. Of
// characters in common use, this most often applies to emoji. Such
// characters are rendered in UTF-8 using "surrogate pairs," and these
// characters end up being at least four bytes long, which confuses both
// MySQL and our text processing pipeline.
//
// Not all emoji are outside of the BMP, since "emoji" just refers to any
// character that is represented in a popular emoji font. Some emoji fonts
// have characters for things like ™ and ® that have been around for ages.
// And many non-emoji characters are outside of the BMP, though most of those
// are obscure/archaic and thus unlikely to be used for a product review.
//
// But the main goal here is to detect problematic characters, most of which
// will be emoji. So we test for inclusion in the BMP because (a) there is no
// simple "is this character emoji" test, and (b) not being in the BMP is the
// actual problem that we need to solve.
//
// So this utility will return `true` if a string contains any "astral
// characters" and false if all its characters are in the BMP.
//
// The logic for detecing this is extremely simple. This is only its own
// module so that it can have a gigantic suite of unit tests.
BV.define('util/emojiDetector',[], function () {

  function emojiDetector (text) {
    return !!(/[\uD800-\uDFFF]/).exec(text);
  }

  return emojiDetector;

});

/**
 * @fileOverview A validation rule to ensure text fields are free of emoji.
 */
BV.define('util/emojiValidationRule',[
  'util/emojiDetector',
  'mf!bv/c2013/messages/toolegit'
], function (
  emojiDetector,
  msgpack
) {

  return function ($el) {
    var name = $el.prop('name');
    var text = $el.val();

    var isInvalid = emojiDetector(text);

    if (isInvalid) {
      return {
        fieldName : name,
        message : msgpack.error_emoji(),
        aria : msgpack.error_emoji_aria()
      };
    }
    else {
      return false;
    }
  };

});

BV.define('vendor/jquery/formMemory',['jquery', 'vendor/json2', 'window'], function (jQuery, JSON, window) {
  /*

  dumbFormState - keeps the state of form entries when you leave and come back later or refresh, etc.
  features: Able to keep state in multipe forms across pages in a namespaced way so data does not collide
  Author: Jason Sebring, mail@jasonsebring.com, 2/23/2011

  Public Domain.
  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

  depends on:
  HTML 5 storage capability
  Browsers supported: IE 8+ and current version of Firefox, Safari, Opera and Chrome
  jQuery 1.5 : tested in this version only, try it out on lower versions if you like
  json2.js : Douglas Crockford GitHUB -> https://github.com/douglascrockford/JSON-js

  configurable options:
  $('form').formMemory({
  persistPasswords : false, // default is false, recommended to NOT do this
  persistLocal : false, // default is false, persists in sessionStorage or to localStorage
  skipSelector : null, // takes jQuery selector of items you DO NOT want to persist
  autoPersist : true, // true by default, false will only persist on form submit
  });

  instance methods:
  $('form').formMemory('remove'); // removes all data associated with the forms matching the selector

  */
  (function ($, JSON, w) {
      function removeData(dbType) {
          var keys = [], db;
          if (!w.sessionStorage || !w.localStorage) {
              return;
          }
          db = (dbType === 'local') ? w.localStorage : w.sessionStorage;
          for (var key in db) {
              if (key.indexOf('bvformMemory-') === 0) { keys.push(key); }
          }
          for (var i = 0; i < keys.length; i++) {
              delete db[keys[i]];
          }
      };
      $.fn.formMemory = function () {
          var $self = $(this), config, formKey,
          nonCheckableSelector = 'input[type="text"],input[type="password"],input[type="email"],input[type="hidden"],input[type="url"],input[type="tel"],input[type="search"],textarea,select',
          checkableSelector = 'input[type="checkbox"],input[type="radio"]',
          allSelector = nonCheckableSelector + ',' + checkableSelector,
          passwordSelector = 'input[type="password"]',
          remove = false;
          function encode(str) {
              if(!str) { return ''; }
              return $('<div />').text(str).html().replace('"', '&quote;');
          }
          function persist($form, key) {
              var formData = [];
              $form.find(allSelector).each(function () {
                  var $this = $(this);
                  if (!config.skipSelector || !$this.is(config.skipSelector)) {
                      if ($this.is(nonCheckableSelector)) {
                          if ($this.is(passwordSelector) && !config.persistPasswords) { return; }
                          formData[formData.length] = {
                              selector: $this[0].nodeName.toLowerCase() +
                                      '[name="' + encode($this.attr('name')) + '"]',
                              val: $this.val()
                          };
                      } else if ($this.is(checkableSelector)) {
                          if ($this.attr('checked')) {
                              formData[formData.length] = {
                                  selector: $this[0].nodeName.toLowerCase() +
                                          '[name="' + encode($this.attr('name')) + '"][value="' + encode($this.val()) + '"]',
                                  val: 'checked'
                              };
                          }
                      }
                  }
              });
              db[key] = JSON.stringify(formData);
          }
          if (typeof(w.sessionStorage) === 'undefined' || typeof(w.localStorage) === 'undefined') {
              return $self;
          }
          if ($self.data('bvformMemory-defined')) {
              config = $self.data('bvformMemory-config');
              if (arguments.length > 0 && $.isPlainObject(arguments[0])) {
                  config = $.extend(config, arguments[0]);
                  return $self;
              } else if (arguments.length > 0 && arguments[0] === 'remove') {
                  remove = true;
              } else {
                  return $self;
              }

          } else {
              $self.data('bvformMemory-defined', true);
              config = {
                  persistPasswords: false,
                  skipSelector: null,
                  persistLocal: false,
                  autoPersist: true
              };
              if (arguments.length > 0 && $.isPlainObject(arguments[0])) {
                  config = $.extend(config, arguments[0]);
              }
              $self.data('bvformMemory-config', config);
          }
          db = config.persistLocal ? w.localStorage : w.sessionStorage;
          $self.each(function () {
              var $this = $(this),
              key = 'bvformMemory-' + window.location.pathname + '-' + $this.prop('id'),
              dbObj = db[key], persistTimeout = null;
              var $results;
              if ($this[0].nodeName !== 'FORM') {
                  throw 'formMemory - must be called on form elements only';
              }
              if (remove) {
                  $this.unbind('blur.bvformMemory focus.bvformMemory click.bvformMemory keyup.bvformMemory submit.bvformMemory change.bvformMemory');
                  delete db[key];
                  return;
              }
              if (dbObj) {
                  dbObj = $.parseJSON(dbObj);
                  for (var i = 0; i < dbObj.length; i++) {
                      $results = $this.find(dbObj[i].selector);
                      if ($results.length === 0) {
                          // If we can't find an element on which to restore
                          // this value, we should at least let a callback know
                          // about it.
                          if (config.noElementCallback) {
                              config.noElementCallback(dbObj[i]);
                          }
                          continue;
                      }
                      $results.each(function () {
                          var $this = $(this);
                          if ($this.is(checkableSelector)) {
                              $this.attr('checked', true);
                          } else {
                              try {
                                $this.val(dbObj[i].val);
                              } catch (e) { }
                          }
                          if ( config.callback ) {
                            config.callback( $this[0] );
                          }
                      });
                  }
              }
              $this.bind('submit.bvformMemory', function (ev) {
                  persist($this, key);
              });
              if (config.autoPersist) {
                  $this.bind('blur.bvformMemory focus.bvformMemory click.bvformMemory keyup.bvformMemory change.bvformMemory formMemory.bvformMemory', function () {
                      if (persistTimeout !== null) {
                          window.clearTimeout(persistTimeout);
                          persistTimeout = null;
                      }
                      persistTimeout = window.setTimeout(function () { persist($this, key); }, 250);
                  });
              }
          });
          return $self;
      };
      $.fn.formMemory.removeSession = function () {
          removeData('session');
      };
      $.fn.formMemory.removeLocal = function () {
          removeData('local');
      };
      $.fn.formMemory.removeAll = function () {
          $.fn.formMemory.removeSession();
          $.fn.formMemory.removeLocal();
      };
  })(jQuery, JSON, window);

  return jQuery;

});

BV.define('bv/util/formMemory',[
  'bv/util/user',
  'vendor/jquery/formMemory',
  'window'
], function (User, $, window) {

  var db = window.sessionStorage;
  var userKey = 'bvformMemory-userchksm';

  return {
    remember: function ($form, cb, options) {
      if (db) {
        var sessionUserChecksum = db[userKey];
        var currentUserChecksum = User.checksum() + '';

        if (sessionUserChecksum && currentUserChecksum !== sessionUserChecksum) {
          this.forget();
        }

        if (currentUserChecksum) {
          try {
            db[userKey] = currentUserChecksum;
          } catch (e) {
            // Ignore only code 22 (QuotaExceededError) errors.
            if (e.code !== 22) {
              throw e;
            }
          }
        }
      }

      $form.formMemory({
        persistLocal: false,
        persistPasswords: false,
        autoPersist: true,
        skipSelector: '.bv-noremember',
        callback: cb,
        noElementCallback: options.noElementCallback
      });
    },
    forget: function () {
      $.fn.formMemory.removeAll();
    }
  };

});

/**
 * @fileOverview This module defines a function that
 * returns a BModel instance for use in media upload.
 */
BV.define('bv/c2013/model/upload',[
  'framework/bmodel',
  'bv/util/contentType',
  'bv/strings',
  'underscore',
  'ENV'
], function (BModel, ContentType, bvStrings, _, ENV) {
  return function (config) {
    var mediaType = config.mediaType || 'photo';
    var source = config.source || '';

    config = _.defaults(config, {
      mediaType: mediaType,
      contentType: 'review',
      source: '',
      name: source + mediaType + 'upload',
      captionFieldName: mediaType + 'caption_1',
      urlFieldName: mediaType + 'url_1',
      hasDropZone: mediaType === 'photo',
      inputType: mediaType === 'photo' ? 'file' : 'text',
      locale: ENV.get('config').locale
    });

    config.postCallback = bvStrings.rpc.postCallback;
    config.contentType = ContentType.noun(config.contentType);

    return new BModel(config);
  };
});

BV.define('bv/c2013/view/submission/errorMessages',[
  'underscore',
  'framework/util/bvreporter',
  'mf!bv/c2013/messages/submission'
], function (
  _,
  BVReporter,
  msgpack
) {

  return {
    /**
     * Determines the appropriate message to display for a given error and
     * returns the message in string form.
     *
     * This was a moderately complicated task due to a variety of ways to
     * determine the error message for different error types.
     *
     * @param {Object} error - The error to display an error for.
     *
     * @param {Boolean} getSubCodeMessage - Override default subcode based
     *   behavior and always return the subcode based message.
     *
     * @return {Array} - An array containing the messages to display for the
     *  given error.
     */
    defaultMessage: function (error) {
      if (!error.Code) {
        BVReporter.warn('error should have a Code property to determine the error message');
      }

      if (error.Code === 'ERROR_FORM_REJECTED') {
        return this.ERRMessage(error);
      }

      var messageFunction = msgpack['error_' + error.Code] || msgpack.error_unknown;
      var message = messageFunction();

      return message;
    },


    /**
     * Gets the default message for an ERR Error Code.
     * If there is only one subcode, we show the corresponding message.
     * Otherwise, we display a generic error message.
     * The subcode errors will be listed at the top of the form.
     *
     * @param {Object} error - An error object.
     *
     * @param {String} error.Code - A string containing the base error code.
     *
     * @param {String} error.SubCodes - A string containing the error subcodes.
     *
     * @return {Array} - An array containing all the subcode based messages.
     */
    ERRMessage: function (error) {
      BVReporter.assert(
        !!error.Code,
        'error needs a Code property to determine the error message'
      );
      BVReporter.assert(
        !!error.SubCodes,
        'error needs SubCode property to determine the error message'
      );

      var subcodes = error.SubCodes.split(' ');
      var message;
      var submessage;

      if (subcodes.length === 1) {
        // First we need to get the error code specific message.
        submessage = msgpack['error_ERROR_FORM_REJECTED_' + subcodes[0]]();

        // Next, we need to stick it in complete sentence.
        message = msgpack.error_ERROR_FORM_REJECTED_SENTENCE({
          errorCodeMessage: submessage
        });
      }
      else {
        message = msgpack.error_ERROR_FORM_REJECTED();
      }

      return message;
    }
  };
});

BV.define('bv/c2013/view/submission/tagHelpers',[], function () {
  return {
    parse: function (name) {
      var tagExp = /tagid_(.*)\/(.*)$/;
      var matches = tagExp.exec(name);
      var correctIdMatchesCount = 3;

      if (matches.length === correctIdMatchesCount) {
        return {
          id: matches[1],
          childId: matches[2]
        };
      }
    },

    updateElEnabled: function ($tag, value) {
      var $container = $tag.closest('.bv-radio-container-li');

      // set values
      $tag.prop('checked', value);
      $container.toggleClass('bv-radio-container-li-active', value);
      $container.attr('aria-checked', value);
    }
  };
});

/* START_TEMPLATE */
BV.define('hbs!submissionStar',['hbs','vendor/handlebars/runtime', 'template/helpers/renderIcon'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  return buffer;
  }

function program3(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<span class=\"bv-submission-star-rating bv-submission-rater-";
  if (stack1 = helpers.serial) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.serial; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> <span class=\"bv-rating-link bv-focusable\" aria-labelledby=\"bv-fieldset-label-text-";
  if (stack1 = helpers.schemaId) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.schemaId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " bv-off-screen-";
  if (stack1 = helpers.schemaId) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.schemaId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " bv-field-aria-validation-";
  if (stack1 = helpers.schemaId) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.schemaId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, depth0.id, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " role=\"radio\" type=\"radio\" aria-checked=\"false\"> ";
  options = {hash:{
    'ariaHidden': ("true")
  },inverse:self.noop,fn:self.program(3, program3, data)};
  stack2 = ((stack1 = helpers.renderIcon),stack1 ? stack1.call(depth0, "bv-sprite-submission-star", options) : helperMissing.call(depth0, "renderIcon", "bv-sprite-submission-star", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <span class=\"bv-off-screen\" id=\"bv-off-screen-";
  if (stack2 = helpers.schemaId) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.schemaId; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "-";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.ratingLabel) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.ratingLabel; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + ". ";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + ".</span> </span> </span> ";
  return buffer;
  });
Handlebars.registerPartial('submissionStar', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
BV.define('vendor/jquery/rating',[
  'jquery',
  'underscore',
  'util/specialKeys',
  'hbs!submissionStar',
  'mf!bv/c2013/messages/contentFilter'
], function (
  jQuery,
  _,
  specialKeys,
  submissionStar,
  msgPack
  ) {
  /*
   ### jQuery Star Rating Plugin v3.14 - 2012-01-26 ###
   * Home: http://www.fyneworks.com/jquery/star-rating/
   * Code: http://code.google.com/p/jquery-star-rating-plugin/
   *
    * Dual licensed under the MIT and GPL licenses:
   *   http://www.opensource.org/licenses/mit-license.php
   *   http://www.gnu.org/licenses/gpl.html
   ###
  */

  /*# AVOID COLLISIONS #*/
  ;if (jQuery) (function ($) {
  /*# AVOID COLLISIONS #*/

    // plugin initialization
    $.fn.rating = function (options) {
      if (this.length === 0) {
        return this; // quick fail
      }

      // Handle API methods
      if (typeof arguments[0] === 'string') {
        // Perform API methods on individual elements
        if (this.length > 1) {
          var args = arguments;
          return this.each(function () {
            $.fn.rating.apply($(this), args);
          });
        }
        // Invoke API method handler
        $.fn.rating[arguments[0]].apply(this, $.makeArray(arguments).slice(1) || []);
        // Quick exit...
        return this;
      };

      // Initialize options for this call
      var options = $.extend(
        {}/* new object */,
        $.fn.rating.options/* default options */,
        options || {} /* just-in-time options */
      );

      // Allow multiple controls with the same name by making each call unique
      $.fn.rating.calls++;

      // loop through each matched element
      this
        .not('.bv-submission-star-rating-applied')
        .addClass('bv-submission-star-rating-applied')
        .each(function () {

          // Load control parameters / find context / etc
          var control, input = $(this);
          var eid = (this.name || 'unnamed-rating').replace(/\[|\]/g, '_').replace(/^\_+|\_+$/g,'');
          var context = $(this.form || document.body);

          // FIX: http://code.google.com/p/jquery-star-rating-plugin/issues/detail?id=23
          var raters = context.data('rating');
          if (!raters || raters.call !== $.fn.rating.calls) {
            raters = {
              count: 0,
              call: $.fn.rating.calls
            };
          }
          var rater = raters[eid];
          var raterGroup;

          // if rater is available, verify that the control still exists
          if (rater) {
            control = rater.data('rating');
            raterGroup = rater.data('group');
          }

          if (rater && control) //{// save a byte!
            // add star to control if rater is available and the same control still exists
            control.count++;
          //}// save a byte!
          else {
            // create new control if first star or control element was removed/replaced

            // Initialize options for this rater
            control = $.extend(
              {}/* new object */,
              options || {} /* current call options */,
              ($.metadata? input.metadata(): ($.meta?input.data():null)) || {}, /* metadata options */
              { count:0, stars: [], inputs: [] }
            );

            // increment number of rating controls
            control.serial = raters.count++;

            // create rating element
            rater = $('<span class="bv-submission-star-rating-control"></span>');

            // UIA-2714 if the heatmap is off we need to add a class to disable the star hover heat map.
            if (!options.withHeatMap) {
              rater.addClass('bv-heat-map-off');
            }

            input.parents('ul').before(rater);

            // Now that we're in the document, find our group
            raterGroup = rater.closest('[role=radiogroup]');
            if (raterGroup.length) {
              rater.data('group', raterGroup);
            }


            // Mark element for initialization (once all stars are ready)
            rater.addClass('bv-submission-rating-to-be-drawn');

            // Accept readOnly setting from 'disabled' property
            if (input.attr('disabled') || input.hasClass('bv-submission-disabled')) control.readOnly = true;

            // Accept required setting from class property (class='required')
            if (input.hasClass('bv-submission-required')) control.required = true;

            // Create 'cancel' button
            // rater.append(
            //   control.cancel = $('<div class="bv-rating-cancel"><a class="bv-rating-link" title="' + control.cancel + '">' + control.cancelValue + '</a></div>')
            //   .mouseover(function () {
            //     $(this).rating('drain');
            //     $(this).addClass('bv-submission-star-rating-hover');
            //   })
            //   .mouseout(function () {
            //     $(this).rating('draw');
            //     $(this).removeClass('bv-submission-star-rating-hover');
            //   })
            //   .click(function () {
            //    $(this).rating('select');
            //   })
            //   .data('rating', control)
            // );

          }; // first element of group

          // insert rating star
          var starValue = '&#x2605;' || this.value;
          var starProps = {
            serial: control.serial,
            title: this.title || this.value,
            value: starValue,
            schemaId: this.name,
            ratingLabel: msgPack.content_filter_star_ratings({ rating: this.value })
          };

          if (this.id) {
            starProps.id = this.id;
            // Shouldn't duplicate IDs!
            input.removeAttr('id');
          }

          var star = $(submissionStar(starProps));

          // inherit attributes from input element
          if (this.className) {
            star.addClass(this.className);
          }

          // Hide the input from screen readers
          // role=presentation cause AXE error and do not change screenreaders playback. See CCS-32719.
          //input.attr('role', 'presentation');
          input.attr('aria-hidden', 'true');

          rater.append(star);
          // Don't think we actually need this, but I'm hesitant to flat-out remove for now
          //input.before('<label for="' + input.attr('id') + '"></label>');

          // Half-stars?
          if (control.half) {
            control.split = 2;
          }

          // Prepare division control
          if (typeof control.split === 'number' && control.split > 0) {
            var stw = ($.fn.width ? star.width() : 0) || control.starWidth;
            var spi = (control.count % control.split), spw = Math.floor(stw/control.split);
            star
              // restrict star's width and hide overflow (already in CSS)
              .width(spw)
              // move the star left by using a negative margin
              // this is work-around to IE's stupid box model (position:relative doesn't work)
              .find('a').css({ 'margin-left':'-'+ (spi*spw) +'px' })
          }

        // readOnly?
        if (control.readOnly) {
          // Mark star as readOnly so user can customize display
          star.addClass('bv-submission-star-rating-readonly');
        }
        else {
         // Enable hover css effects
          star.addClass('bv-submission-star-rating-live')
           // Attach mouse events
            .mouseover(function () {
              var $this = $(this);
              $this.rating('fill');
              $this.rating('focus');
              $this.addClass('bv-focused');
            })
            .mouseout(function () {
              var $this = $(this);
              $this.rating('draw');
              $this.rating('blur');
              $this.removeClass('bv-focused');
            })
            .on('click touchstart', function (e) {
              // CCS-977: The "touchstart" event is in here to prevent a bug that happens on certain mobile devices.
              // The bug happens when tapping the screen and sliding your finger away from the star. Doing this
              // can make the wrong star appear selected. This happens because a "touchstart" can also trigger
              // a "mouseover". So, this catches the touchstart event and does a preventDefault so that mouseover
              // doesn't get triggered during the touch.
              e.preventDefault();
              e.stopPropagation();

              var $this = $(this);
              $this.closest('[role=radiogroup]').find('[role=radio]').attr('aria-checked', 'false');
              $this.find('[role=radio]').attr('aria-checked', 'true');
              $this.rating('select');
            })
            .focusout(function () {
              var input = $( control.current ? control.current.data('rating.input') : null );
              control.focusout.call(input[0]);
            })
            .keydown(function (e) {
              var keyCode = e.keyCode;
              var $ratingGroup;
              var $this;
              var $first;
              var $last;
              var $next;
              var $prev;

              if (!_.contains(specialKeys, keyCode)) {
                return;
              }

              //Find active rating group
              $ratingGroup = $(e.target).parents('.bv-radio-group');
              //Try to find active rating
              $this = $ratingGroup.find('span.bv-submission-star-rating.bv-submission-star-rating-on:last');
              $next = $this.next();
              $prev = $this.prev();
              // Right and Up keys increase the rating
              if (keyCode === specialKeys.RIGHT || keyCode === specialKeys.UP) {
                e.preventDefault();
                e.stopPropagation();
                // If we on first rating, active it
                if (!$this[0]) {
                  $this = $(this);
                  $this.rating('activate');
                  return;
                }
                // Activate next rating
                if ($next[0]) {
                  $this.rating('deactivate');
                  $next.rating('activate');
                }
                // If we on the last rating, activate first 
                if (!$next[0]) {
                  $first = $ratingGroup.find('span.bv-submission-star-rating.bv-submission-star-rating-on:first');
                  $first.rating('activate');
                }
              }
              // Left and Down keys decrease the rating
              if (keyCode === specialKeys.LEFT || keyCode === specialKeys.DOWN) {
                e.preventDefault();
                e.stopPropagation();
                // Activate previos rating
                if ($prev[0]) {
                  $this.rating('deactivate');
                  $prev.rating('activate');
                }
                // If we on first rating, activate last
                if (!$prev[0]) {
                  $last = $ratingGroup.find('span.bv-submission-star-rating.bv-submission-star-rating:last');
                  $this.rating('deactivate');
                  $last.rating('activate');
                }
              }

              // Deactivate SPACE and ENTER keys, as rating is selected
              // when arrow key is pressed
              if (keyCode === specialKeys.SPACE || keyCode === specialKeys.ENTER) {
                e.preventDefault();
                e.stopPropagation();
              }
            });
          }

          star.find('.bv-rating-link').click(function (e) {
            star.click();
          });

          // set current selection
          if (this.checked) {
            control.current = star;
            star.find('[role=radio]').attr('aria-checked', 'true');
          }

          // set current select for links
          if (this.nodeName === "A") {
            if (input.hasClass('bv-submission-selected'))
              control.current = star;
          };

          // hide input element
          input.addClass('bv-hidden');

          // backward compatibility, form element to plugin
          input.change(function () {
            $(this).rating('select');
          });

          // attach reference to star to input element and vice-versa
          star.data('rating.input', input.data('rating.star', star));

          // store control information in form (or body when form not available)
          control.stars[control.stars.length] = star[0];
          control.inputs[control.inputs.length] = input[0];
          control.rater = raters[eid] = rater;
          control.context = context;

          /*
          // was commented because aria-owns property is not needed in radiogroup as all radio buttons are nested inside the parent span with role=radiogroup, see CSS-16204
          // Set up an aria property indicating the IDs of the owned stars
          if (raterGroup) {
            var starIDs = $(control.stars).find('.bv-rating-link').map(function () {
              return this.id;
            });
            // Can't directly call join, since jQuery's not returning a true array
            starIDs = [].join.call(starIDs, ' ');
            raterGroup.attr('aria-owns', starIDs);
          }
          */

          input.data('rating', control);
          rater.data('rating', control);
          star.data('rating', control);
          context.data('rating', raters);
        }); // each element

      // Initialize ratings (first draw)
      $('.bv-submission-rating-to-be-drawn').rating('draw').removeClass('bv-submission-rating-to-be-drawn');

      return this; // don't break the chain...
    };

    /*--------------------------------------------------------*/

    /*
      ### Core functionality and API ###
    */
    $.extend($.fn.rating, {
      // Used to append a unique serial number to internal control ID
      // each time the plugin is invoked so same name controls can co-exist
      calls: 0,

      focus: function () {
        var control = this.data('rating'); if (!control) return this;
        if (!control.focus) return this; // quick fail if not required
        // find data for event
        var input = $(this).data('rating.input') || $( this.tagName=='INPUT' ? this : null );
        // focus handler, as requested by focusdigital.co.uk
        if (control.focus) control.focus.apply(input[0], [input.val(), $('a', input.data('rating.star'))[0]]);
      }, // $.fn.rating.focus

      blur: function () {
        var control = this.data('rating'); if (!control) return this;
        if (!control.blur) return this; // quick fail if not required
        // find data for event
        var input = $(this).data('rating.input') || $( this.tagName=='INPUT' ? this : null );
        // blur handler, as requested by focusdigital.co.uk
        if (control.blur) control.blur.apply(input[0], [input.val(), $('a', input.data('rating.star'))[0]]);
      }, // $.fn.rating.blur

      fill: function () { // fill to the current mouse position.
        var control = this.data('rating'); if (!control) return this;
        // do not execute when control is in read-only mode
        if (control.readOnly) return;
        // Reset all stars and highlight them up to this element
        this.rating('drain');
        this.prevAll().addBack().filter('.bv-submission-rater-'+ control.serial).addClass('bv-submission-star-rating-hover');
      },// $.fn.rating.fill

      drain: function () { // drain all the stars.
        var control = this.data('rating'); if (!control) return this;
        // do not execute when control is in read-only mode
        if (control.readOnly) return;
        // Reset all stars
        control.rater.children().filter('.bv-submission-rater-'+ control.serial).removeClass('bv-submission-star-rating-on').removeClass('bv-submission-star-rating-hover');
      },// $.fn.rating.drain

      draw: function () { // set value and stars to reflect current selection
        var control = this.data('rating'); if (!control) return this;
        // Clear all stars
        this.rating('drain');
        // Set control value
        if (control.current) {
          //UIA-7308 - to programatically set AFTER initialization, we have to do this.
          $(control.current).find('a').attr('aria-checked', true)
          control.current.data('rating.input').prop('checked', true);
          control.current.prevAll().addBack().filter('.bv-submission-rater-'+ control.serial).addClass('bv-submission-star-rating-on');
        }
        else {
          $(control.inputs).prop('checked', false);
        }
        // Show/hide 'cancel' button
        //control.cancel[control.readOnly || control.required?'hide':'show']();
        // Add/remove read-only classes to remove hand pointer
        this.siblings()[control.readOnly?'addClass':'removeClass']('bv-submission-star-rating-readonly');
      },// $.fn.rating.draw

      activate: function () {
        if (this.data('rating')) {
          this.rating('fill');
          this.rating('focus');
          this.addClass('bv-focused');
          // Move focus direct to 'a' tag to improve screen reader compatibility
          this.find('[role=radio]').attr('aria-checked', 'true').focus();
          this.rating('select');
        }
      },

      deactivate: function () {
        if (this.data('rating')) {
          this.rating('draw');
          this.rating('blur');
          this.removeClass('bv-focused');
          this.find('[role=radio]').attr('aria-checked', 'false');
        }
      },

      select: function (value,wantCallBack) { // select a value

            // ***** MODIFICATION *****
            // Thanks to faivre.thomas - http://code.google.com/p/jquery-star-rating-plugin/issues/detail?id=27
            //
            // ***** LIST OF MODIFICATION *****
            // ***** added Parameter wantCallBack : false if you don't want a callback. true or undefined if you want postback to be performed at the end of this method'
            // ***** recursive calls to this method were like : ... .rating('select') it's now like .rating('select',undefined,wantCallBack); (parameters are set.)
            // ***** line which is calling callback
            // ***** /LIST OF MODIFICATION *****

        var control = this.data('rating'); if (!control) return this;
        // do not execute when control is in read-only mode
        if (control.readOnly) return;
        // clear selection
        control.current = null;
        // programmatically (based on user input)
        if (typeof value!='undefined') {
         // select by index (0 based)
          if (typeof value=='number')
         return $(control.stars[value]).rating('select',undefined,wantCallBack);
          // select by literal value (must be passed as a string
          if (typeof value=='string')
            //return
            $.each(control.stars, function () {
              if ($(this).data('rating.input').val()==value) $(this).rating('select',undefined,wantCallBack);
            });
        }
        else
          control.current = this[0].tagName=='INPUT' ?
           this.data('rating.star') :
            (this.is('.bv-submission-rater-'+ control.serial) ? this : null);
        // Update rating control state
        this.data('rating', control);
        // Update display
        this.rating('draw');
        // find data for event
        var input = $( control.current ? control.current.data('rating.input') : null );
        // click callback, as requested here: http://plugins.jquery.com/node/1655

            // **** MODIFICATION *****
            // Thanks to faivre.thomas - http://code.google.com/p/jquery-star-rating-plugin/issues/detail?id=27
            //
            //old line doing the callback :
            //if (control.callback) control.callback.apply(input[0], [input.val(), $('a', control.current)[0]]);// callback event
            //
            //new line doing the callback (if i want :)
            if ((wantCallBack ||wantCallBack == undefined) && control.callback) control.callback.apply(input[0], [input.val(), $('a', control.current)[0]]);// callback event
            //to ensure retro-compatibility, wantCallBack must be considered as true by default
            // **** /MODIFICATION *****
    },// $.fn.rating.select

      readOnly: function (toggle, disable) { // make the control read-only (still submits value)
        var control = this.data('rating'); if (!control) return this;
        // setread-only status
        control.readOnly = toggle || toggle==undefined ? true : false;
        // enable/disable control value submission
        if (disable) $(control.inputs).attr("disabled", "disabled");
        else          $(control.inputs).removeAttr("disabled");
        // Update rating control state
        this.data('rating', control);
        // Update display
        this.rating('draw');
      },// $.fn.rating.readOnly

      disable: function () { // make read-only and never submit value
        this.rating('readOnly', true, true);
      },// $.fn.rating.disable

      enable: function () { // make read/write and submit value
        this.rating('readOnly', false, false);
      }// $.fn.rating.select
   });

    /*--------------------------------------------------------*/

    /*
      ### Default Settings ###
      eg.: You can override default control like this:
      $.fn.rating.options.cancel = 'Clear';
    */
    $.fn.rating.options = { //$.extend($.fn.rating, { options: {
        cancel: 'Cancel Rating',   // advisory title for the 'cancel' link
        cancelValue: '',           // value to submit when user click the 'cancel' link
        split: 0,                  // split the star into how many parts?

        // Width of star image in case the plugin can't work it out. This can happen if
        // the jQuery.dimensions plugin is not available OR the image is hidden at installation
        starWidth: 16//,

        //NB.: These don't need to be pre-defined (can be undefined/null) so let's save some code!
        //half:     false,         // just a shortcut to control.split = 2
        //required: false,         // disables the 'cancel' button so user can only select one of the specified values
        //readOnly: false,         // disable rating plugin interaction/ values cannot be changed
        //focus:    function () {},  // executed when stars are focused
        //blur:     function () {},  // executed when stars are focused
        //callback: function () {},  // executed when a star is clicked
   }; //} });

    /*--------------------------------------------------------*/

    /*
      ### Default implementation ###
      The plugin will attach itself to file inputs
      with the class 'multi' when the page loads
    */
    $(function () {
     $('input[type=radio].bv-submission-star').rating();
    });

  /*# AVOID COLLISIONS #*/
  })(jQuery);
  /*# AVOID COLLISIONS #*/
  return jQuery;
});

/*
 * Copyright (c) 2013 Shane Carr and Sam Placette
 *
 * https://github.com/SamPlacette/placeholdr
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

BV.define('vendor/jquery/placeholder',[ 'jquery' ], function ( jQuery ) {

  (function (window, document, $, ns, placeholderAttribute, origValFn, alternatePlaceholderAttribute) {
    // Utility functions
    var findPlaceholderInputs = function () {
      var $this = $(this);
      return $this.find("["+placeholderAttribute+"]," + "["+alternatePlaceholderAttribute+"]");
    };

    var getPlaceholderText = function () {
      var $this = $(this);
      return ($this.attr(placeholderAttribute) || $this.attr(alternatePlaceholderAttribute));
    };

    var setCursorPositionAtStart = function () {
      var $this = $(this);
      if (typeof this.selectionStart == "number") {
        this.selectionStart = 0;
        this.selectionEnd = 0;
      }
      else if (typeof this.createTextRange != "undefined") {
        var range = this.createTextRange();
        range.collapse(true);
        range.moveStart('character', 0);
        range.moveEnd('character', 0);
        range.select();
      }
    };

    var putPlaceholder = function () {
      var $this = $(this);
      if ($this.hasClass(ns)) {
        return;
      }
      if (!$this[origValFn]()) {
        $this.addClass(ns);
        if ($this.attr("type") === "password") {
          $this.attr("type", "text");
          $this.data(ns+"-pwd", true);
        }
        $this[origValFn](getPlaceholderText.call(this));
        // Disable selecting range and caret position within the placeholder text
        $this.on('mouseup', setCursorPositionAtStart).on('selectstart', false);
        if ($this.is(':focus')) {
          setCursorPositionAtStart.call(this);
        }
      }
    };

    var clearPlaceholder = function () {
      var $this = $(this);
      $this.removeClass(ns);
      if ($this.data(ns+"-pwd")) {
        $this.attr("type", "password");
      }
      if ($this[origValFn]() === getPlaceholderText.call(this)) {
        $this[origValFn]("");
      }
      // Re-enable selecting range and caret position within the input text
      $this.off('mouseup', setCursorPositionAtStart).off('selectstart', false);
    };

    // Find and iterate through all form elements in order to prevent
    // placeholders from being submitted in forms.
    $.fn.clearPlaceholdersInForm = function () {
      findPlaceholderInputs.call(this).each(function () {
        if ($(this).data(ns)){
          clearPlaceholder.call(this);
        }
      });
    };
    // options: Object (optional)
    // options.preserveOnFocus: Boolean. If true, preserve placeholder text
    // on focus (hide on keypress instead)
    // options.overrideNative: Boolean. If true, override native placeholder
    $.fn.placeholdr = function (options) {
      // ensure options exists (avoid null reference errors)
      options || (options = {});
      // Don't evaluate the polyfill if the browser supports placeholders
      // unless an option specifies to override the native implementation
      var overrideNative = options.overrideNative || false;
      if (placeholderAttribute in document.createElement("input") && !overrideNative) {
        //This snippet done to make all placeholder text appear in Safari browsers after input field was cleared
        if (options.isSafari) {
          $(this).find('textarea').each(function() {
            var $this = $(this);
            $this.on('input', function(event) {
              if($this[0].value === '') {
                $this.blur().focus();
              }
            });
          });
        }
      return;
    }

    // Find and iterate through all inputs with a native placeholder attribute
    $(this).find("["+placeholderAttribute+"]").each(function() {
      var $this = $(this);

      // leave now if we've polyfilled this element before (idempotent)
      if ($this.data(ns)) {
        return;
      }

      $this.data(ns, true);

      if (overrideNative) {
        // copy original placeholder text to alternate location
        $this.attr(alternatePlaceholderAttribute, $this.attr(placeholderAttribute));
        // clear native placeholder attr to disable native implementation
        $this.attr(placeholderAttribute, '');
      }

      // put the placeholder into the value
      putPlaceholder.call(this);

      var putPlaceholderHandler = function (event) {
        var target = this;
        // set putPlaceholder to execute in near future in order to catch
        // IE10 clear event
        setTimeout(function () {
          putPlaceholder.call(target, event);
        }, 25);
      };
      // just for consistency, define a handler for clear too
      var clearPlaceholderHandler = clearPlaceholder;

      if (options && options.preserveOnFocus) {
        // clear placeholder when characters are entered or pasted
        // restore placeholder when input is cleared
        $this.on('keypress keydown paste', clearPlaceholderHandler).on('blur change mouseup keyup', putPlaceholderHandler);
      }
      else {
          // handle focus and blur events
          $this.focus(clearPlaceholderHandler);
          $this.blur(putPlaceholderHandler);
        }
      });
    };

    // A convenience method to provide a common interface for consumers to
    // get placeholder text value, regardless of whether implementation is
    // native or via placeholdr library:
    $.fn.getPlaceholderText = function () {
      return getPlaceholderText.call(this);
    };

    // Overwrite the existing jQuery val() function
    $.fn[origValFn] = $.fn.val;
    $.fn.val = function (txt) {
      var $this = $(this);
      if ($.type(txt) === "undefined" && $this.data(ns) && $this[origValFn]() === getPlaceholderText.call(this)) {
        return "";
      }
      if ($.type(txt) === "string") {
        clearPlaceholder.call(this);
      }
      return $.fn[origValFn].apply(this, arguments);
    };

  } (window, document, jQuery, "placeholdr", "placeholder", "placeholdrVal", "placeholdr", "clearPlaceholdersInForm"));

  return jQuery;

});

/*
 * BVRadioSilence is a module used to create simple wrapper nodes around standard
 * input radio elements, creating a UI widget of sorts that gives us flexibility on
 * styling its presentation.
 */
BV.define('bv/util/jquery/radiosilence',[
  'ENV',
  'underscore',
  'jquery',
  'util/specialKeys'
], function (ENV, _, $, specialKeys) {

  var BVRadioSilence = function (element, options) {
    var $el = this.$element = $(element);
    var self;
    this.options = _.extend({}, $.fn.bvradiosilence.defaults, options);
    this.options.wrapper = '<' + this.options.wrapperType + '></' + this.options.wrapperType + '>';
    this.$inputs = $el.find('input').before(this.options.wrapper);
    this.$wrappers = $el.find(this.options.wrapperType);
    this.$containers = $el.find('.' + this.options.containerClass);

    if (this.options.value) {
      this.$inputs.filter('[value="' + this.options.value + '"]')
        .prop('checked', true);
    }
    if (this.options.inputClass) {
      this.$inputs.addClass(this.options.inputClass);
    }
    if (this.options.wrapperClass) {
      this.$wrappers.addClass(this.options.wrapperClass);
    }
    self = this;
    this.$wrappers.each(function (index, item) {
      var value;
      var $this = $(this);
      var $input = $this.next('input');
      var forLabel = $input.attr('id');
      var $aria;
      $this.attr('for', forLabel);

      // Provide an ID for a11y purposes
      $this.attr('id', forLabel + '-label');

      if (!self.options.displayAttr) {
        value = $input.val();
      }
      else {
        value = $input.attr(self.options.displayAttr);
      }

      if (self.options.labelInnerHtml) {
        $this.html(self.options.labelInnerHtml || value);
      }
      else {
        $this.text(value);
      }

      // As the input will receive focus, use the display value for our ARIA label
      $aria = $input.attr('aria-label');
      if (!$aria) {
        $input.attr('aria-label', value);
      }

      // If the wrapper was made to be focusable, remove focus from the input to avoid
      // issues with tabbing
      if ($this.hasClass('bv-focusable')) {
        $this.attr('aria-label', value);
        $input.removeClass('bv-focusable');
        $input.attr('role', 'presentation');
      }

      if (_(self.options.wrapperAttrs).isObject()) {
        $this.attr(self.options.wrapperAttrs);
      }

      if (_(self.options.inputAttrs).isObject()) {
        $input.attr(self.options.inputAttrs);
      }
    });

    /*
    // was commented because aria-owns property is not needed in radiogroup as all radio buttons are nested inside the parent span with role=radiogroup, see CSS-16204
    // a11y group setup
    var containingA11yGroup;
    var radioIDs;
    containingA11yGroup = $el.closest('[role=radiogroup]');
    if (containingA11yGroup.length) {
      radioIDs = $el.find('.bv-focusable').map(function () { return this.id; });
      if (radioIDs.length) {
        radioIDs = [].join.call(radioIDs, ' ');
        containingA11yGroup.attr('aria-owns', radioIDs);
      }
    }
    */

    this.inputFocusHandler = this.options.inputFocusHandler || this.inputFocusHandler;
    this.inputKeydownHandler = this.options.inputKeydownHandler || this.inputKeydownHandler;
    this.inputClickHandler = this.options.inputClickHandler || this.inputClickHandler;
    this.wrapperClickHandler = this.options.wrapperClickHandler || this.wrapperClickHandler;
    this.blur = this.options.blur || $.noop;
    this.render = this.options.render || this.render;

    this.render();
    this.listen();
  };

  BVRadioSilence.prototype = {
    constructor: BVRadioSilence,

    render: function ($element) {
      var $checked = $element || this.$element.find('input:checked');

      // container active
      this.$containers.removeClass(this.options.activeClass);
      $checked.closest('.' + this.options.containerClass).addClass(this.options.activeClass);

      // wrapper focus
      this.$wrappers.removeClass(this.options.focusedClass);
      $checked.prev(this.options.wrapperType).addClass(this.options.focusedClass);

      this.$element.trigger('rendered');
    },

    listen: function () {
      this.$inputs
        .off('keydown', this.inputKeydownHandler)
        .on('keydown', this, this.inputKeydownHandler);

      this.$inputs
        .off('click', this.inputClickHandler)
        // TODO: Evaluate reworking how this is bound, to avoid the magical
        // middle argument, which sets the event's data property
        .on('click', this, this.inputClickHandler)
        .on('focus', this, this.inputFocusHandler)
        // Bind `addFocusClass` as a separate focus event, so that custom
        // input focus handlers don't have to worry about it
        .on('focus', this.addFocusClass)
        .on('blur', this.removeFocusClass)
        .on('blur', this, this.invokeBlurCallback);

      this.$wrappers
        .off('click', this.wrapperClickHandler)
        .on('click', this, this.wrapperClickHandler);
    },

    wrapperClickHandler: function () {
      $(this).next('input').click().focus();
    },

    addFocusClass: function (e) {
      $(this).prev('label').addClass('bv-radio-wrapper-label-focused');
    },
    invokeBlurCallback: function (e) {
      var self = e.data;
      self.blur.call(self.$element);
    },
    removeFocusClass: function (e) {
      $(this).prev('label').removeClass('bv-radio-wrapper-label-focused');
    },

    inputClickHandler: function (e) {
      var self = e.data;
      self.render($(this));
      $(this).attr('aria-checked', 'true');
      $(this).parent().siblings().each(function () {
        $(this).children().attr('aria-checked', 'false');
      });
    },

    inputFocusHandler: $.noop,

    inputKeydownHandler: function (e) {
      var firstNotChecked;
      // If we are on the first rating, 'Right' click should select it
      if (ENV.get('keyboardMode') && e.keyCode === specialKeys.ENTER || ENV.get('keyboardMode') && e.keyCode === specialKeys.RIGHT) {
        firstNotChecked = ($(this).parents('.bv-radio-container-li').is(':first-child') && !($(this).is(':checked')));

        if (e.keyCode === specialKeys.ENTER || e.keyCode === specialKeys.RIGHT && firstNotChecked) {
          $(this).click();
          return false;
        }
      }
    }

  };

  $.fn.bvradiosilence = function (options) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bvradiosilence');
      options = options || {};

      if (!data) {
        $this.data('bvradiosilence', (data = new BVRadioSilence(this, options)));
      }
      if (_.isString(options)) {
        data[options]();
      }
    });
  }; // $.fn.bvradiosilence

  $.fn.bvradiosilence.defaults = {
    wrapperType: 'label',
    wrapperClass: 'bv-radio-wrapper-label',
    focusedClass: 'bv-radio-wrapper-label-focused',
    containerClass: 'bv-radio-container-li',
    activeClass: 'bv-radio-container-li-active',
    inputClass: 'bv-radio-input'
  };

  return $;

});

BV.define('bv/util/jquery/nps',[
  'ENV',
  'underscore',
  'bv/util/focusManager',
  'util/specialKeys',
  'bv/util/jquery/radiosilence'
], function (ENV, _, focusManager, specialKeys, $) {

  var BVnps = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, $.fn.nps.defaults, options);
    this.options.$npsComment = this.options.$npsComment || this.$element.closest('.bv-fieldset').find('.bv-netpromotercomment-wrapper');
    this.options.wrapperClickHandler = this.wrapperClickHandler;
    this.options.inputFocusHandler = this.inputFocusHandler;
    this.options.inputKeydownHandler = this.inputKeydownHandler;
    this.options.renderComments = this.renderComments;
    this.$element.bvradiosilence(this.options);
    this.renderComments(this);
  };

  BVnps.prototype = {
    constructor: BVnps,

    renderComments: function (self, focus) {
      var $checked = self.$element.find('input:checked');
      var $commentInput;

      // render nps comments
      self.options.$npsComment.toggleClass('bv-hidden', !self.options.expanded && _.isUndefined($checked.val()));

      if (focus) {
        $commentInput = self.options.$npsComment.find('textarea');
        focusManager.moveFocus($commentInput);
      }
    },

    wrapperClickHandler: function (event) {
      var self = event.data;
      self.$element
        .off('rendered')
        .on('rendered', function () {
          $(this).next('input').click();
          self.options.renderComments(self, true);
        });
    },

    inputFocusHandler: function (event) {
      var self = event.data;
      self.$element
        .off('rendered')
        .on('rendered', function () {
          self.options.renderComments(self);
        });
    },

    inputKeydownHandler: function (event) {
      var self = event.data;
      var firstNotChecked;

      if (ENV.get('keyboardMode') && event.keyCode === specialKeys.ENTER || ENV.get('keyboardMode') && event.keyCode === specialKeys.RIGHT) {
        // If we are on the first rating, 'Right' click should select it
        firstNotChecked = ($(this).parents('.bv-radio-container-li').is(':first-child') && !($(this).is(':checked')));

        if (event.keyCode === specialKeys.ENTER || event.keyCode === specialKeys.RIGHT && firstNotChecked) {
          $(this).click();
          self.options.renderComments(self);
          return false;
        }
      }
    }
  };

  $.fn.nps = function (options) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bvnps');
      options = options || {};

      if (!data) {
        $this.data('bvnps', (data = new BVnps(this, options)));
      }
      if (_.isString(options)) {
        data[options]();
      }
    });
  }; // $.fn.nps

  return $;

});

// Autosize 1.13 - jQuery plugin for textareas
// (c) 2012 Jack Moore - jacklmoore.com
// license: www.opensource.org/licenses/mit-license.php
BV.define('vendor/jquery/autosize',['jquery', 'body'], function ($, body) {

	var
	defaults = {
		className: 'autosizejs',
		append: "",
		callback: false
	},
	hidden = 'hidden',
	borderBox = 'border-box',
	lineHeight = 'lineHeight',
	copy = $('<textarea tabindex="-1"/>').css({
		position: 'absolute',
		top: '-9999px',
		left: 0,
		right: 'auto',
		bottom: 'auto',
		border: 0,
		padding: 0,
		'-moz-box-sizing': 'content-box',
		'-webkit-box-sizing': 'content-box',
		boxSizing: 'content-box',
		wordWrap: 'break-word',
		overflow: 'hidden',
		transition: 'none',
		'-webkit-transition': 'none',
		'-moz-transition': 'none'
	}),
	// line-height is omitted because IE7/IE8 doesn't return the correct value.
	copyStyle = [
		'fontFamily',
		'fontSize',
		'fontWeight',
		'fontStyle',
		'letterSpacing',
		'textTransform',
		'wordSpacing',
		'textIndent'
	],
	oninput = 'oninput',
	onpropertychange = 'onpropertychange',
  test = $(copy)[0];

		// test that line-height can be accurately copied to avoid
		// incorrect value reporting in old IE and old Opera
		$(test).css(lineHeight, '99px');
		if ($(test).css(lineHeight) === '99px') {
			copyStyle.push(lineHeight);
		}

		$.fn.autosize = function (options) {
			options = $.extend({}, defaults, options || {});
			return this.each(function () {
				var
				ta = this,
				$ta = $(ta),
				mirror,
				minHeight = $ta.height(),
				maxHeight = parseInt($ta.css('maxHeight'), 10),
				active,
				i = copyStyle.length,
				boxOffset = 0,
				value = ta.value,
				callback = $.isFunction(options.callback);

				if ($ta.css('box-sizing') === borderBox || $ta.css('-moz-box-sizing') === borderBox || $ta.css('-webkit-box-sizing') === borderBox){
					boxOffset = $ta.outerHeight() - $ta.height();
				}

				if ($ta.data('mirror') || $ta.data('ismirror')) {
					// if autosize has already been applied, exit.
					// if autosize is being applied to a mirror element, exit.
					return;
				} else {
					mirror = $(copy).data('ismirror', true).addClass(options.className)[0];

					$ta.data('mirror', $(mirror)).css({
						overflow: hidden,
						overflowY: hidden,
						wordWrap: 'break-word'
					});
				}

				// Opera returns '-1px' when max-height is set to 'none'.
				maxHeight = maxHeight && maxHeight > 0 ? maxHeight : 9e4;

				// Using mainly bare JS in this function because it is going
				// to fire very often while typing, and needs to very efficient.
				function adjust() {
					var height, overflow, original;

					// the active flag keeps IE from tripping all over itself.  Otherwise
					// actions in the adjust function will cause IE to call adjust again.
					if (!active) {
						active = true;
						mirror.value = ta.value + options.append;
						mirror.style.overflowY = ta.style.overflowY;
						original = parseInt(ta.style.height,10);

						// Update the width in case the original textarea width has changed
						mirror.style.width = $ta.css('width');

						// Needed for IE to reliably return the correct scrollHeight
						mirror.scrollTop = 0;

						// Set a very high value for scrollTop to be sure the
						// mirror is scrolled all the way to the bottom.
						mirror.scrollTop = 9e4;

						height = mirror.scrollTop;
						overflow = hidden;
						if (height > maxHeight) {
							height = maxHeight;
							overflow = 'scroll';
						} else if (height < minHeight) {
							height = minHeight;
						}
						height += boxOffset;
						$ta.css('overflowY', overflow);

						if (original !== height) {
							$ta.css('height', height + 'px');
							if (callback) {
								options.callback.call(ta);
							}
						}

						// This small timeout gives IE a chance to draw it's scrollbar
						// before adjust can be run again (prevents an infinite loop).
						setTimeout(function () {
							active = false;
						}, 1);
					}
				}

				// mirror is a duplicate textarea located off-screen that
				// is automatically updated to contain the same text as the
				// original textarea.  mirror always has a height of 0.
				// This gives a cross-browser supported way getting the actual
				// height of the text, through the scrollTop property.
				while (i--) {
					mirror.style[copyStyle[i]] = $ta.css(copyStyle[i]);
				}

				$( body() ).append(mirror);

				if (onpropertychange in ta) {
					if (oninput in ta) {
						// Detects IE9.  IE9 does not fire onpropertychange or oninput for deletions,
						// so binding to onkeyup to catch most of those occassions.  There is no way that I
						// know of to detect something like 'cut' in IE9.
						ta[oninput] = ta.onkeyup = adjust;
					} else {
						// IE7 / IE8
						ta[onpropertychange] = adjust;
					}
				} else {
					// Modern Browsers
					ta[oninput] = adjust;

					// The textarea overflow is now hidden.  But Chrome doesn't reflow the text after the scrollbars are removed.
					// This is a hack to get Chrome to reflow it's text.
					ta.value = '';
					ta.value = value;
				}

				$(window).resize(adjust);

				// Allow for manual triggering if needed.
				$ta.bind('autosize', adjust);

				// Call adjust in case the textarea already contains text.
				adjust();
			});
		};

  return $;
});

/**
 * @file Submission View
 */

BV.define('bv/c2013/view/submission',[
  'ENV',
  'window',
  'framework/bview',
  'bv/ui-core/focusableview',
  'bv/util/focusManager',
  'framework/bmodel',
  'framework/clientEvents',
  'hbs!submissionBase',
  'hbs!reviewPhotoCounts',
  'hbs!slider',
  'bv/util/submissionSubviews',
  'underscore',
  'util/specialKeys',
  'bv/util/user',
  'bv/util/contentType',
  'bv/util/janrain',
  'bv/util/withRPC',
  'bv/util/session',
  'bv/util/productInfo',
  'bv/strings',
  'util/isodate',
  'bv/ui-core/modestbox',
  'vendor/toolegit',
  'util/emailValidationRule',
  'util/emojiValidationRule',
  'bv/util/formMemory',
  'bv/util/loadingOverlay',
  'bv/util/ariaStatus',
  'mf!bv/c2013/messages/submission',
  'mf!bv/c2013/messages/common',
  'framework/util/bvreporter',
  'framework/util/bvtracker',
  'framework/util/ie',
  'jquery',
  'bv/c2013/model/upload',
  'bv/c2013/view/submission/errorMessages',
  'framework/video/youtubeVideo',
  'bv/c2013/view/submission/tagHelpers',

  // The following includes do NOT have corresponding references.
  // Add anything you need BEFORE these.
  'vendor/jquery/rating',
  'vendor/jquery/placeholder',
  'bv/util/jquery/nps',
  'vendor/jquery/autosize'
], function SubmissionView (
  ENV,
  window,
  BView,
  FocusableView,
  FocusManager,
  BModel,
  ClientEvents,
  template,
  tmplReviewPhotoCounts,
  tmplSlider,
  SubmissionSubviews,
  _,
  specialKeys,
  User,
  ContentType,
  Janrain,
  withRPC,
  Session,
  ProductInfo,
  bvStrings,
  isodate,
  ModestBox,
  TooLegit,
  emailValidationRule,
  emojiValidationRule,
  FormMemory,
  LoadingOverlay,
  ariaStatus,
  msgPack,
  msgPackCommon,
  BVReporter,
  BVTracker,
  IE,
  $,
  UploadModel,
  errorMessages,
  YoutubeVideo,
  tagHelpers
) {
  var ENVConfig = ENV.get('config');
  var View = BView.extend(FocusableView);

  // We create validation rules to represent server side errors
  // this is the suffix we use when giving the rule a name.
  var serverValidationSuffix = '-server';

  // Get the fieldset container for this element.
  function getFieldSet (element) {
    return $(element).closest('.bv-fieldset');
  }


  return View.extend({
    name: 'submission',
    rpcReady: $.Deferred(),

    events: {
      'click .bv-submit': 'onSubmit',
      'click .bv-cancel': 'cancelForm',
      'click .bv-btn-add-video': 'videoUpload',
      'click .bv-btn-add-photo': 'photoUploadChoice',
      'click .bv-fieldset-agreements a': 'goToAgreements',
      'click .bv-fieldset-netpromoterscore .bv-radio-container-li input': 'clickEventNP',
      'focus .bv-fieldsets input, .bv-fieldsets textarea, .bv-fieldsets select': 'focusEvent',
      'focus .bv-fieldsets .bv-radio-input, .bv-fieldsets .bv-content-btn': 'focusEvent',
      'change .bv-fieldset-tags .bv-radio-container-li input': 'tagChange',
      'focus .bv-fieldset-tags .bv-radio-container-li': 'focusTag',
      'blur .bv-fieldset-tags .bv-radio-container-li': 'blurTag',
      'keydown .bv-fieldset-tags .bv-radio-container-li': 'keydownTag',
      'keydown .bv-thumbnail-close': 'keydownRemoveButton',
      'change .bv-fieldset select': 'selectChange',
      'keypress input[maxlength].bv-text': 'checkMaxlength'
    },

    template: template,

    msgpacks: [msgPack, msgPackCommon],

    init: function _init (init) {
      var rating;
      // ratingconfiguration settings
      var ratingClasses = [];
      var ratingHoverClasses = [];

      // create our ratingRange values for the star rating controls
      // ratingRange should actually be defined per rating dimension and come
      // from API but... they don't send that to us now, so we'll make it a
      // single config option for now.
      var ratingRange = ENVConfig.submission.rating.range;
      var last = _.last(ratingRange);
      var first = _.first(ratingRange);

      this.inline = init.inline;
      this.isGenericSubmission = init.isGenericSubmission;
      this.closeAllPostSubmission = init.closeAllPostSubmission;
      this.ModestBoxId = init.inline ? this.model.get('componentId') : 'lightbox';
      this.reviewPhotoCountsTemplate = tmplReviewPhotoCounts;
      this.thumbnailViews = {};

      this.on('viewready', this.setupUIElements, this);
      this.on('addmedia', this.addMedia, this);
      this.on('removemedia', this.removeMedia, this);
      this.on('showupload', this.showUploadView, this);
      this.on('updateupload', this.updateButtons, this);
      this.on('updateupload', this.setRemainingPhotoCount, this);

      // Preload API.
      if (ENVConfig.vendorConfig.janrain) {
        Janrain.withAPI();
      }

      first = (first === last) ? 0 : first;

      // iterate over range and create class names for rating css helpers
      while (first <= last) {
        rating = first++;
        ratingClasses.push('bv-fieldset-r' + rating);
        ratingHoverClasses.push('bv-fieldset-h' + rating);
      }

      // serialize a string of classes and store our on view scope
      this.ratingClasses = ratingClasses.join(' ');
      this.ratingHoverClasses = ratingHoverClasses.join(' ');

      this.once('viewshown', function onceViewShown () {
        var $form = this.getForm();

        // Move initial focus if not in a search modest box,
        // and if not displaying form errors (ex. ERR)
        if (!$form.closest('.bv-mbox-search').length && !this.model.get('formErrors')) {
          this.moveInitialFocus();
        }
        this._setupERRErrors();
      });

      this.on('viewshown', function onViewShown () {
        var thankYouPageView;
        var socialSharingView;

        // If the BV Local Social Sharing feature is enabled, trigger an API request
        if (
          this.hasFeature('thankYouPage') &&
          this.getFeatureView('thankYouPage').hasFeature('localSocialSharing')
        ) {
          thankYouPageView = this.getFeatureView('thankYouPage');
          socialSharingView = thankYouPageView.getFeatureView('localSocialSharing');

          socialSharingView.model.trigger(
            'submissionLoad',
            this.model.get('clientAPIConfig'),
            { contentType: this.model.get('contentType') }
          );
        }

        // Trigger custom client event *after* the view is already shown
        ClientEvents.trigger(
          'submissionLoad',
          this.model.get('clientAPIConfig'),
          { contentType: this.model.get('contentType') }
        );
      });

      this.on('viewclosed', function onViewClosed () {
        ClientEvents.trigger(
          'submissionClose',
          this.model.get('clientAPIConfig'),
          { contentType: this.model.get('contentType') }
        );
      });

      // TODO: The `viewready` event might not be necessary now that we've
      // got `attach`. Investigate.
      this.on('viewready', this._registerFocusables, this);
    },

    // TODO: This method was previously defined on BView, yet in practice
    // only the submission view used it. It seems like a strange thing that
    // should probably be handled within FocusManager.
    _registerFocusables: function _registerFocusables () {
      this.$('.bv-focusable').each(function eachFocusable (index, item) {
        item.tabIndex = 0;
      });
    },

    render: function render () {
      if (this.model.get('pageview')) {
        this.triggerPageView();
      }

      BView.prototype.render.apply(this, arguments);
    },

    attach: function attach (elToAttach) {
      var radioWrapper;

      BView.prototype.attach.call(this, elToAttach);

      // This horrific code makes FF radio groups work with screenreaders.
      radioWrapper = this.$viewEl.find('.bv-fieldset-radio-wrapper, .bv-fieldset-reviewtext');

      if (radioWrapper.length > 0) {
        radioWrapper.data('receiveFocusManagerEvents', true);

        radioWrapper.on('focusManagerFocus', function onFocus (e) {
          // only care about tabs
          if (e.keyEvent.keyCode !== specialKeys.TAB) {
            return;
          }

          // These elements shouldn't keep focus, but should pass it to the
          // next or previous node as appropriate
          FocusManager[e.keyEvent.shiftKey ? 'focusPrev' : 'focusNext']();
        });
      }

      BVTracker.feature({
        type: 'Shown',
        name: 'Submission',
        bvProduct: ProductInfo.getType(this),
        source: 'firebird',
        notificationId: this.model.get('bvNotificationId'),
        contentId: this.model.get('bvQuestionId'),
        productId: ProductInfo.getId(this),
        clientName: ENVConfig.clientname.toLowerCase(),
        deploymentZone: ENVConfig.siteId,
        dc: ENVConfig.displaycode,
        messageType: this.model.get('bvMessageType'),
        recipientDomain: this.model.get('bvRecipientDomain'),
        userLocale: ENVConfig.locale,
        campaignId: this.model.get('campaignId')
      });
    },

    // Used to exist on BView, but this is the only view that used it.
    ieCompat: function ieCompat () {
      var ieVersion = IE();
      if (ieVersion) {
        // IE Stuff if we have a .bv-compat wrapper
        this.$el.find('.bv-compat').addClass('bvie bvie' + ieVersion);
        if (ieVersion < 8) {
          this.$el.find('.bv-compat').addClass('bvie-lt8');
        }
      }
    },

    photoUploadChoice: function photoUploadChoice (e) {
      var self = this;

      if (!this.hasFeature('addSocialPhoto')) {
        return this.photoUpload(e);
      }

      // Create the view once.
      if (!this.photouploadPopup) {
        this.photouploadPopup = new SubmissionSubviews.PhotoUploadPopupView({
          parent: {
            $targetEl: self.$('.bv-popup-target'),
            options: {
              positionPopupRelativeToLink: true
            },
            photoUpload: $.proxy(self.photoUpload, self),
            facebookPhotoUpload: $.proxy(self.facebookPhotoUpload, self)
          },
          aboveModestBox: true,
          model: new BModel(self.model.attributes)
        });

        ModestBox.get(this.ModestBoxId).once('beforeClose', function onceBeforeClose () {
          if (self.photouploadPopup.rendered) {
            self.photouploadPopup.detach();
          }

          delete self.photouploadPopup;
        });
      }

      // If it's already rendered, close it.
      if (this.photouploadPopup.rendered) {
        this.photouploadPopup.detach();
      }
      // If it isn't rendered, open it.
      else {
        this.photouploadPopup.render();
      }

      return;
    },

    // Send the user through the upload-photo flow.
    photoUpload: function photoUpload (e) {
      var photos = this.model.get('photos');
      var $srcElement = this.$viewEl.find('.bv-btn-add-photo');

      if (photos && photos.length >= this.maxMedia.photo) {
        // TODO: Figure out how to communicate this to the user. -APD
        return;
      }

      this.showUploadView('photo', null, null, null, $srcElement);
    },

    facebookPhotoUpload: function facebookPhotoUpload (e) {
      var photos = this.model.get('photos');
      var $srcElement = this.$viewEl.find('.bv-btn-add-photo');
      var self = this;

      if (photos && photos.length >= this.maxMedia.photo) {
        // TODO: Figure out how to communicate this to the user. -APD
        return;
      }

      // Hopefully Janrain.withAPI has already finished, otherwise this will
      // probably trigger a pop-up warning.
      Janrain.withAPI(function janrainCallback () {
        LoadingOverlay.show();

        // TODO: Handle errors...
        Janrain.login('facebook')
          .done(function facebookLoginCallback (socialData) {
            var authToken = (
              socialData &&
              socialData.accessCredentials &&
              socialData.accessCredentials.accessToken
            );

            if (authToken) {
              self.showUploadView(
                'photo',
                undefined,
                'facebook',
                { token: authToken },
                $srcElement
              );
            }
          })
          .fail(LoadingOverlay.hide);
      });
    },

    videoUpload: function videoUpload (e) {
      var $srcElement = $(e.target);
      this.showUploadView('video', null, null, null, $srcElement);
    },

    // `existingMedia` argument is optional.
    // `$srcElement` argument is optional jQuery element that originated this call
    showUploadView: function showUploadView (
      mediaType,
      existingMedia,
      _source,
      cfg,
      $srcElement
    ) {
      var source = _source || '';
      var modelJSON = this.model.toJSON();
      var uploadViewFunc = {
        photo: SubmissionSubviews.PhotoUploadView,
        video: SubmissionSubviews.VideoUploadView,
        facebookphoto: SubmissionSubviews.FacebookPhotoUploadView
      };

      /**
        * We need to create the model first, then create the view.
        * Otherwise the dropdownable feature won't work properly.
        */
      var uploadModel = UploadModel({
        source: source,
        mediaType: mediaType,
        contentType: modelJSON.contentType,
        msgpack: msgPack,
        parent: this.model,
        formFields: modelJSON.formFields,
        clientName: modelJSON.clientName,
        componentId: this.model.get('componentId'),
        apiConfig: modelJSON.apiConfig
      });

      var config = _.extend({
        parent: this,
        contentType: ContentType.noun(modelJSON.contentType),
        media: existingMedia,
        msgpack: msgPack,
        mediaType: mediaType,
        componentId: this.model.get('componentId'),
        model: uploadModel
      }, cfg);

      var uploadView = new uploadViewFunc[source + mediaType](config);
      var dropdownView = uploadView.getFeatureView('dropdownable');
      var $ariaMessage;

      var mb = ModestBox.get(this.ModestBoxId);
      var $mboxWrapper = mb.$viewEl.find('.bv-mbox-wrapper');

      var $form = this.getForm();

      mb.push({
        title: msgPack['add_' + source + mediaType](),
        view: uploadView,
        beforeShow: function beforeShow () {
          uploadView.setupView();
        },
        afterShow: function afterShow () {
          // UIA-3118 - Notify screen reader the modal dialog has changed views.
          // This is returned a jquery wrapped element.
          $ariaMessage = ariaStatus.add(msgPack['add_' + mediaType + '_dialog']());
          if (dropdownView) {
            // Wait for animations to complete, then popIn
            _.delay(function delayPopIn () { dropdownView.popIn(); }, 300);
          }
          $mboxWrapper.addClass('bv-mbox-media-upload');
          // Prevents focus from going away out of current dialog
          // when interacting with it via VoiceOver
          $form.attr('aria-hidden', true);
        },
        beforeHide: function beforeHide () {
          // Clear out our aria message when we leave this view.
          $ariaMessage.remove();
          if (dropdownView) {
            dropdownView.popOut();
          }
          $mboxWrapper.removeClass('bv-mbox-media-upload');
          $form.attr('aria-hidden', false);
        },
        afterHide: function afterHide () {
          if (typeof ($srcElement) === 'string') {
            $srcElement = $($srcElement).find('a');
          }
        },
        afterDetach: function afterDetach () {
          // Rescan the focus layer, then move focus
          FocusManager.rescanFocusLayer();
          FocusManager.moveFocus($srcElement || $(document.activeElement));
        }
      });

    },

    // Return a user from the upload-photo flow, image in tow.
    addMedia: function addMedia (mediaType, media) {
      var ieVersion;
      var ariaMessage;

      this._addMedia(mediaType, media);

      if (media.url) {
        // We put the caption and the media URL into the form, but we need to
        // keep ahold of the other metadata in case the form is restored. Use
        // the session store.
        Session.set(escape(media.url), media, $.noop);
      }

      // Exit from the photo upload view.
      ModestBox.get(this.ModestBoxId).pop();

      // IE8 can't copy certain styles through autosize.
      // Explicit resize here because IE8 is special.
      ieVersion = IE();
      if (ieVersion && ieVersion < 9) {
        this.$form.find('textarea').resize();
      }

      // Notify the screen reader that media was added
      ariaMessage = ariaStatus.add(msgPack['submission_' + mediaType + '_added']());
      setTimeout(function delayRemoveAriaMessage () {
        ariaMessage.remove();
      }, 1000);

      // Explicitly retrigger FormMemory, otherwise we have to wait for
      // another form event that may not happen before the modal is closed.
      this.$form.trigger('formMemory');
    },

    // Use _addMedia instead of addMedia when you're adding media items
    // programmatically instead of through the UI flow.
    _addMedia: function _addMedia (mediaType, media) {
      this.model.addMedia(mediaType, media);
      this._updateThumbnails(mediaType);
    },

    removeMedia: function removeMedia (id, mediaType) {
      this.model.removeMedia(id, mediaType);
      this._updateThumbnails(mediaType);
    },

    _updateThumbnails: function _updateThumbnails (mediaType) {
      var thumbnailView = this.thumbnailViews[mediaType];
      if (!thumbnailView) {
        thumbnailView = new SubmissionSubviews.ThumbnailView({
          parent: this,
          mediaType: mediaType,
          componentId: this.model.get('componentId')
        });
        this.thumbnailViews[mediaType] = thumbnailView;
      }
      thumbnailView.render();
    },

    updateButtons: function updateButtons (mediaType, remainingCount) {
      // Disable the button if the user has uploaded the max number of
      // photos.
      var $button = this.$el.find('.bv-btn-add-' + mediaType);
      if (remainingCount <= 0) {
        $button.attr('disabled', true);
      }
      else {
        $button.removeAttr('disabled');
      }
    },

    // Re-render the template that tells the user how many photo(s) he/she
    // can attach to the review.
    setRemainingPhotoCount: function setRemainingPhotoCount (mediaType, remainingCount) {
      var data;
      var $label;
      var html;

      if (mediaType === 'video') {
        return;
      }

      data = {
        maxPhotos: this.model.getMaxNumByMediaType(mediaType)
      };

      if (_.isNumber(remainingCount) && remainingCount !== this.maxMedia.photo) {
        // Coerce to string so it won't be falsy under any circumstances.
        data.remainingPhotos = String(remainingCount);
      }

      $label = this.$el.find('.bv-review-photo-actions-label');

      if (this.maxMedia.photo === 1) {
        // When the user can upload only one image, any "helpful" text is
        // going to be redundant ("Add up to 1 photo").
        html = '';
      }
      else {
        html = this.reviewPhotoCountsTemplate(data);
      }

      $label.html(html);
    },

    cancelForm: function cancelForm (e) {
      ModestBox.get(this.ModestBoxId).close();
    },

    scrollForm: function scrollForm (e) {
      this.trigger('scroll');
    },

    // This is from Azel... maybe clean it up later.
    focusEvent: function focusEvent (e) {
      var $target = $(e.currentTarget);
      this.updateActiveElementCSS($target);
    },

    clickEventNP: function clickEventNP (e) {
      var $target = $(e.currentTarget);

      if ($target && $target.attr('name') && ($target.attr('name') === 'netpromoterscore')) {
        // Forcing validation for NPS
        if ($target.prop('checked')) {
          this.validator.check($target);
        }
      }
    },

    addRejectionClass: function addRejectionClass ($element) {
      var $target = $element.closest('fieldset');

      if ($element.prop('name') === 'rating') {
        $target.addClass('bv-fieldset-rejected');
      }
    },

    /**
     * Moves the active class from the previous fieldset item to the passed element
     */
    updateActiveElementCSS: function updateActiveElementCSS ($element) {
      var $previousActive;
      var $newActive;
      var $npActive;

      if (this.fieldsets) {
        $previousActive = this.fieldsets.filter('.bv-fieldset-active');
        $newActive = $element.closest('.bv-fieldset');

        // If the last focused field was a radio field, force validating it
        if (
          this.doneFocusing &&
          $previousActive.is('.bv-radio-field') &&
          !$previousActive.is($newActive)
        ) {
          this.validator.check($previousActive.find('input:first'));
        }

        this.fieldsets.removeClass('bv-fieldset-active').removeClass('bv-hidden');

        if ($newActive.is('.bv-fieldset-netpromotercomment')) {
          $npActive = this.fieldsets.filter('.bv-fieldset-netpromoterscore');
          $npActive.addClass('bv-fieldset-active');
        }
        $newActive.addClass('bv-fieldset-active');
      }
    },

    focusTag: function focusTag (e) {
      var $target = $(e.currentTarget);
      $target.find('.bv-radio-wrapper-label').addClass('bv-radio-wrapper-label-focused');
    },

    blurTag: function blurTag (e) {
      var $target = $(e.currentTarget);
      $target.find('.bv-radio-wrapper-label').removeClass('bv-radio-wrapper-label-focused');
    },

    keydownTag: function keydownTag (e) {
      if (e.keyCode === specialKeys.ENTER) {
        // The browser won't change the value of the checkbox when an ENTER is pressed.
        // So, we force this to happen by firing a click event on the checkbox
        // when an ENTER key is pressed.
        e.preventDefault();
        $(e.currentTarget).find('input').click();
      }
    },

    keydownRemoveButton: function keydownRemoveButton (e) {
      var $target;

      if (e.keyCode === specialKeys.ENTER || e.keyCode === specialKeys.SPACE) {
        e.preventDefault();
        $target = $(e.currentTarget);

        // Clicking immediately causes spacebar to scroll despite preventDefault
        // Defer the click to make sure scrolling stops
        _.defer(function deferClickingTarget () {
          $target.click();
        });
      }
    },

    // Because this happens on keypress, it catches only keys that correspond
    // to characters. If we put this handler on keydown, once the field hit
    // its maximum we'd complain whenever the user pressed _any_ key, even a
    // modifier key, even backspace.
    checkMaxlength: function checkMaxlength (e) {
      var self = this;
      var value;
      var message;
      var $target = $(e.currentTarget);
      var maxlength = Number($target.attr('maxlength'));

      // A value of 0 most likely means that maxlength was set to an empty
      // string. In any case, it's not a situation worth handling.
      if (maxlength === 0) { return; }
      value = $target.val();

      function clearOldAlert () {
        if (!self._$ariaAlert) { return; }
        self._$ariaAlert.remove();
        self._$ariaAlert = null;
      }

      if (value.length >= maxlength) {
        // Too long. Tell the user.
        message = msgPack.max_length_reached_message({ maxlength: maxlength });
        // Remove any old alert before we append the new one. This way we
        // won't keep adding alerts onto the page.
        clearOldAlert();
        this._$ariaAlert = this.showAriaAlert(message);
      }
      else {
        // The field is OK now, so it's safe for us to remove any element we
        // may have appended earlier.
        clearOldAlert();
      }
    },

    tagChange: function tagChange (e) {
      var $target = $(e.currentTarget);
      var $radioContainer = $target.closest('.bv-radio-container-li');
      var $icon = $radioContainer.find('.bv-radio-container-icon');
      var isChecked = $target.is(':checked');

      $radioContainer.toggleClass('bv-radio-container-li-active', isChecked);
      $radioContainer.attr('aria-checked', isChecked);

      if ($icon.length === 1) {
        if (isChecked) {
          $icon.html('✔');
        }
        else {
          $icon.html('+');
        }
      }
    },

    selectChange: function selectChange (e) {
      var $target = $(e.currentTarget);
      var optOut;

      if ($target.is('[name="contextdatavalue_Age"]')) {
        optOut = $target.val() === '17orUnder';
        if (optOut) {
          BVTracker.optOut();
        }
        else if (this.optedOut) {
          BVTracker.optIn();
        }
        this.optedOut = optOut;
      }
    },

    /**
     * Perform any client side submission tasks here.
     */
    onSubmit: function onSubmit (e) {
      var emailField;
      var emailAddress;
      var $form;
      var self = this;
      var agrType = self.getAgreementsType();
      var agreements = this.model.attributes.agreements[agrType];
      var agreedtotermsandconditions = false;
      var agreementName;
      var agreementNamePrefix = 'agreements_';

      e.preventDefault();

      emailField = this.model.get('formFields').emailField;
      if (emailField) {
        emailAddress = this.$('#bv-email-field-' + emailField.schema.Id).val();
        User.save({ email: $.trim(emailAddress).toLowerCase() });
      }

      $form = this.getForm();

      _(agreements).some(function (agreementsField, agreementsKey) {
        var checkBox;
        agreementName = agreementNamePrefix + agrType + '_' + agreementsKey;
        checkBox = $("[name='" + agreementName + "']")[0];

        if (checkBox.checked) {
          agreedtotermsandconditions = true;
        }
        else {
          agreedtotermsandconditions = false;
          return true;
        }
      });

      if (agreedtotermsandconditions) {
        $("[name='agreedtotermsandconditions']")[0].value = true;
      }

      this.model.get('fingerprint').preSubmitAction($form, function presSubmitCallback (err) {
        if (err) {
          self.trigger('showcannotsubmitpage', {
            view: self,
            message: msgPack.error_FAILED_TO_LOAD_FINGERPRINT_AFTER(),
            isRecoverable: true
          });
        }
        else {
          // Check if form has alternative attributes for placeholders
          if ($form.find('[placeholdr]').length > 0) {
            // Clear alternative attribute for placeholders
            $form.clearPlaceholdersInForm();
          }
          $form.submit();
        }
      });
    },

    setupRPC: function setupRPC () {
      var self = this;

      self.rpc = withRPC(self.rpcReady, function withRPCcallback (response) {
        LoadingOverlay.hide();

        // If submission was successful, we'll get a SubmissionId.
        if (response.SubmissionId) {
          self.postSubmission(response);
        }
        else {
          self.formErrorsPage(response);
        }
      });

      self.model.set('channelId', self.rpc.channel);
    },

    // Find the helper container associated with this star.
    starHelper: function starHelper (star) {
      return getFieldSet(star).find('.bv-rating-helper');
    },

    /*
     * ratingFieldHas(d)Error uses css classes to maintain
     * a state/scope across two event contexts, this could
     * be consolidated by improving ratingFocus/Blur to share
     * the same scope, but would require a more substantial refactor
     */
    ratingFieldHasError: function ratingFieldHasError ($ratingFieldSet) {
      return $ratingFieldSet.hasClass('bv-error');
    },

    ratingFieldHadError: function ratingFieldHadError ($ratingFieldSet) {
      return $ratingFieldSet.hasClass('bv-had-error');
    },

    ratingSetLabel: function ratingSetLabel ($ratingFieldSet, labelText) {
      $ratingFieldSet.html(labelText);
    },

    ratingDisplayError: function ratingDisplayError ($ratingFieldSet) {
      $ratingFieldSet.addClass('bv-error');
      $ratingFieldSet.removeClass('bv-had-error');
    },

    ratingRemoveError: function ratingRemoveError ($ratingFieldSet) {
      $ratingFieldSet.removeClass('bv-error');
      $ratingFieldSet.addClass('bv-had-error');
    },

    // hoverOn Event for RatingFieldSets
    ratingFocus: function ratingFocus () {
      var $checkERRSubmissionPage;
      var ratingHelper;
      var ratingFieldSet;
      var self = this;

      return function ratingFocusReturn (value, link) {
        ratingHelper = ratingHelper || self.starHelper(this);
        ratingFieldSet = ratingFieldSet || getFieldSet(ratingHelper);
        // When hovering over the ratings radio we remove the error class
        // with the intention of placing error class back on blur
        // Error class should not be removed for ratings on resubmission page, VOL-1164
        $checkERRSubmissionPage = self.$('.bv-submission-rejection-errors');
        if (self.ratingFieldHasError(ratingFieldSet) && ($checkERRSubmissionPage.length === 0)) {
          self.ratingRemoveError(ratingFieldSet);
        }
        ratingHelper.data('helper', ratingHelper.data('helper') || ratingHelper.html());
        self.ratingSetLabel(ratingHelper, this.title);
        ratingFieldSet.removeClass(self.ratingHoverClasses).addClass('bv-fieldset-h' + value);
      };
    },

    // hoverOff Event for RatingFieldSets
    ratingBlur: function ratingBlur () {
      var ratingHelper;
      var ratingFieldSet;
      var self = this;

      return function ratignBlurReturn (value, link) {
        ratingHelper = ratingHelper || self.starHelper(this);
        ratingFieldSet = ratingFieldSet || getFieldSet(ratingHelper);

        // if our data matches the default helper_rating then a value wasn't
        // set so place the error class back on field set
        if (
          ratingHelper.data('helper') === msgPack.helper_rating_1() &&
          self.ratingFieldHadError(ratingFieldSet)
        ) {
          self.ratingDisplayError(ratingFieldSet);
        }

        self.ratingSetLabel(ratingHelper, (ratingHelper.data('helper') || ''));
        ratingFieldSet.removeClass(self.ratingHoverClasses);
      };
    },

    getForm: function getForm (_modelData) {
      var modelData = _modelData || this.model.toJSON();

      var queryArray = [
        modelData.contentType,
        modelData.subject.Type,
        modelData.subject.SanitizedId,
        modelData.modelCid
      ];

      var queryString = '#bv-submit' + queryArray.join('-');
      var result = $(queryString);

      return result;
    },

    // After the form is injected, we need to do some setup (validation, create
    // star inputs, etc.)
    formSetup: function formSetup (_options) {
      var self = this;
      var rememberedMediaFields;
      var mediaFieldsPattern;
      var allFields;
      var recommendedField;
      var npsField;
      var npsExpandedField;
      var possibleMediaIndices;
      var modelData = this.model.toJSON();
      var $form = this.getForm(modelData);
      var options = _options || {};
      var isIE = navigator.userAgent.match(/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s)(\d+)/i);
      var isSafariMobile = navigator.userAgent.match(/(iPhone|iPod)/);
      var isSafari = navigator.userAgent.match(/Version\/[\d\.]+.*Safari/i);
      self.$form = $form;

      self.fieldsets = $form.find('.bv-input-fieldsets .bv-fieldset'); // cache this
      self.serverErrors = [];

      self.publish('formSetup', {});

      self.ieCompat();

      self.maxMedia = {
        photo: this.model.getMaxNumByMediaType('photo'),
        video: this.model.getMaxNumByMediaType('video')
      };

      self.validator = TooLegit($form, {
        ruleSelectors: modelData.validationRules.rules,
        ignore: ['.bv-form-ignore'],

        onError: function onError ($el, rule) {
          // We caught this on the client side. Remove the validation for the
          // server-side rule because it's redundant.
          var serverRule = $el.prop('name') + serverValidationSuffix;
          if (rule !== serverRule) {
            self.validator.removeSelectorRules($el, [serverRule]);
          }
        },

        preSubmit: function preSubmit () {
          self.validator.removeRule(self.serverErrors);
        },

        submit: _.debounce(function debouncedSubmit (form) {
          self.scrollForm();

          LoadingOverlay.show();

          // Try to prevent multiple submissions.
          $form.find('.bv-submit').prop('disabled', true);

          // Wait for RPC before submitting.
          self.rpcReady
            .done(function rpcReadyDone () {
              $form.trigger('submit.placeholder');

            })
            .fail(function rpcReadyFail () {
              self.trigger('showcannotsubmitpage', {
                view: self,
                isRecoverable: true
              });

              self.triggerPageView({ value: 'UnknownError' });
            });
        }, 500, true)
      });

      // Handle a star selection (validate, update helper text, etc.)
      function starClickHandler (value, link) {
        var title = this.title;
        self.starHelper(this).data('helper', title).html(title);
        getFieldSet(this).removeClass(self.ratingClasses + ' ' + self.ratingHoverClasses + ' ' + 'bv-had-error');
        getFieldSet(this).addClass('bv-fieldset-r' + value);
        self.validator.check($(this));
        // Commented out to prevent fieldset deactivation. CCS-21753
        // self.focusEvent($(this));
      }

      // FormMemory works great _except_ for media fields. When it restores
      // remembered values, it ignores (e.g.) "input[name="photourl_1"] if it
      // can't find them on the page. And it won't find those fields on page
      // reload because we don't create them until the user uploads media.
      //
      // To fix this, we (a) register a callback for when FormMemory can't
      // find an element; (b) collect each such field, grouping by media
      // type; (c) look up the model data for each URL from the session
      // store; (d) add each media item manually.
      //
      // We could try to do this completely separately from FormMemory, and
      // it might be a bit cleaner that way, but FormMemory gives us a _lot_
      // for free, and this way the media data will never get out of sync
      // with everything else.

      rememberedMediaFields = {
        photo: [],
        video: []
      };

      mediaFieldsPattern = /name="(photo|video)url_(\d+)"/;

      function collectRememberedMediaFields (data) {
        var result;
        var mediaType;
        var index;
        var group;

        // Only pay attention to the fields that contain photo/video URLs. We
        // can ignore the captions because we'll pull them from the session
        // store.
        result = data.selector.match(mediaFieldsPattern);
        if (!result) {
          return;
        }

        mediaType = result[1];
        // These fields start at 1. Convert back to zero-indexed.
        index = Number(result[2]) - 1;

        group = rememberedMediaFields[mediaType];
        group[index] = data.val;
      }

      // Given a media URL, look up its metadata from the session store.
      function getDataForMediaURL (url) {
        var dfd = $.Deferred();

        Session.get(escape(url), function sessionGetCallback (result) {
          dfd.resolve(result);
        });
        return dfd;
      }

      // After we're done collecting them, go through each one and add it,
      // just like we would if we were returning from the upload view.
      function restoreMediaFields () {
        var mediaTypes;
        var urls;
        var deferreds;
        var urlTable;

        mediaTypes = _(rememberedMediaFields).keys();
        // This is a list of all the URLs of media items that need to be
        // restored. We'll look up their data from the session store and add
        // them one by one.
        urls = _(rememberedMediaFields).chain().values().flatten().value();
        if (urls.length === 0) {
          return;
        }

        deferreds = _(urls).map(getDataForMediaURL);
        urlTable = {};

        $.when.apply($, deferreds).done(function applyDeferredsDone () {
          // Put metadata in a table so we can easily look it up by URL.
          // TODO: When we update lodash, this can become a call to _.indexBy.
          _(arguments).forEach(function forEachArg (item) {
            if (!item) {
              return;
            }

            urlTable[item.url] = item;
          });

          _(mediaTypes).forEach(function forEachMediaType (mediaType) {
            _(rememberedMediaFields[mediaType]).forEach(function forEachField (url) {
              var item = urlTable[url];
              if (!item) {
                return;
              }
              self._addMedia(mediaType, item);
            });
          });
        });
      }

      if (isSafari) {
        options.isSafari = true;

        if (isSafariMobile) {
          $form.find('button.bv-form-actions-submit.bv-submit').attr('style', 'margin-bottom: 60px !important');
        }
      }

      if (isIE) {
        options.overrideNative = true;
        options.preserveOnFocus = true;
      }

      $form.placeholdr(options);

      // Delay the autosize execution so that styles can properly load in IE8.
      setTimeout(function delayedAutosize () {
        $form.find('textarea').autosize();
      }, 0);

      // Get a reference to all the fields we are about to process
      allFields = self.model.getFields();

      // Remember the form state.
      FormMemory.remember($form, function remember (element) {
        var $el = $(element);

        // Handle saved star inputs.
        if ($el.is('.bv-rating-input')) {
          starClickHandler.call($el[0], $el.val(), $el);
        }
        else if ($el.is('[name="contextdatavalue_Age"]')) {
          self.optedOut = $el.val() === '17orUnder';
        }

        // Handle text inputs (particularly ones with mins).
        self.validator.count($el);
      }, {
        noElementCallback: function noElementCallback (data) {
          // Attn: if we ever need to use Form Memory with ERR, a starting point for that
          // can be found in the PR for UIA-7308: https://github.com/bazaarvoice/firebird/pull/5447
          //
          // Specifically, check out:
          // * https://github.com/tnunamak/firebird/commit/fb67cd5e633fb7428a12e0acb4e996faa503f1ee
          // * the commit where this comment was added (and code was removed)
          if (!allFields.PreviousSubmissionId) {
            // If we are not in ERR land, then go ahead and remember media
            collectRememberedMediaFields(data);
          }
        }
      });

      restoreMediaFields();

      function getField ($inputs) {
        var name = $($inputs[0]) && $($inputs[0]).attr('name');
        return allFields[name];
      }

      // check if fieldsets are required, if yes set aria-required='true'
      self.$('fieldset').not('.bv-fieldset-tags, .bv-fieldset-netpromoterscore, .bv-fieldset-netpromotercomment, .bv-form-actions, .bv-fieldset-agreements').each(function fieldAriaRequired () {
        var $this = $(this);
        var $inputs = $this.find('.bv-text, .bv-select, .bv-radio-input');
        var field = getField($inputs);

        if (!_.isUndefined(field) && field.validation.required) {
          if (field.type === 'select') {
            $inputs.attr('required', 'true');
          }
          else if (field.type !== 'radio') {
            $inputs.attr('aria-required', 'true');
          }
        }
      });

      // Set up tags by selecting any that are injected
      self.$('.bv-fieldset-tags-group').each(function eachTagGroup () {
        var group;
        var $group = $(this);
        var name = $group.find('input:first').attr('name');
        var firstTagInfo = tagHelpers.parse(name);

        function updateTag (tag) {
          var tagInfo = tagHelpers.parse(tag.schema.Id);
          var $tag = $group.find('input[name="tagid_' + tagInfo.id + '/' + tagInfo.childId + '"]');
          var value = tag.schema.Value === 'true';

          tagHelpers.updateElEnabled($tag, value);
        }

        if (firstTagInfo) {
          group = allFields['tag_' + firstTagInfo.id];

          if (group && group.tags) {
            _(group.tags).each(updateTag);
          }
        }
      });

      // Setup rating input with jquery plugin.
      // UIA-2714 make colorful start hover heat map configurable so adding
      // option to plugin called withHeatMap
      self.$('.bv-fieldset-rating, .bv-fieldset-secondary-rating').each(function eachRating () {
        var $this = $(this);

        var $inputs = $this.find('.bv-radio-input');
        var field = getField($inputs);
        function focusout () {
          self.validator.check($inputs);
        };

        $inputs.rating({
          callback: starClickHandler,
          focus: self.ratingFocus(),
          blur: self.ratingBlur(),
          focusout: focusout,
          withHeatMap: self.hasFeature('starHoverHeatMap')
        });

        if (field && field.schema.Value) {
          $inputs.rating('select', field && field.schema.Value);

          // Undo any validation updates (adding classes, etc.) to be
          // consistent with the rest of the form
          self.validator.reporter.handlers.reset($inputs.first());
        }
      });

      if (options.shortForm) {
        self.fieldsets.addClass('bv-hidden');
        self.fieldsets.first().removeClass('bv-hidden');
      }

      function validateRadioSilence () {
        var $this = $(this);
        self.validator.check($this.find('input'));
      }

      // setup recommended
      recommendedField = allFields.isrecommended;
      self.$('.bv-fieldset-isrecommended-group').bvradiosilence({
        displayAttr: 'data-label',
        value: recommendedField && recommendedField.schema.Value,
        inputAttrs: {
          role: 'radio'
        },
        blur: validateRadioSilence
      });

      // setup sliders
      self.$('.bv-fieldset-slider-group').each(function eachSliderGroup () {
        var $this = $(this);
        var $inputs = $this.find('input');
        var field = getField($inputs);

        $this.bvradiosilence({
          labelInnerHtml: tmplSlider,
          value: field && field.schema.Value,
          inputAttrs: {
            role: 'radio'
          },
          blur: validateRadioSilence
        });
      });

      // setup NPS comments
      npsField = allFields.netpromoterscore;
      npsExpandedField = allFields.netpromoterexpanded;
      self.$('.bv-fieldset-netpromoterscore-group').nps({
        value: npsField && npsField.schema.Value,
        expanded: npsExpandedField && npsExpandedField.schema.Value,
        inputAttrs: {
          role: 'radio'
        },
        blur: validateRadioSilence
      });

      function addMediaWithIndex (mediaType, index) {
        var mediaUrl;
        var caption;
        var loadData;
        var media = allFields[mediaType + 'url_' + index];

        if (!media || !media.schema.Value) {
          return;
        }

        mediaUrl = media.schema.Value;
        caption = allFields[mediaType + 'caption_' + index];

        if (mediaType === 'video') {
          loadData = new YoutubeVideo(mediaUrl).getVideoData();
        }
        else {
          loadData = $.Deferred().resolve();
        }

        loadData.done(function loadDataDone (data) {
          var thumbUrl;

          if (mediaType === 'video') {
            thumbUrl = data && data.thumbUrl;
          }
          else {
            // this is guaranteed made by the API
            thumbUrl = mediaUrl.replace('photo.jpg', 'photoThumb.jpg');
          }

          self._addMedia(mediaType, {
            id: media.schema.Id,
            caption: caption && caption.schema.Value,
            url: mediaUrl,
            thumbUrl: thumbUrl
          });
        });
      }

      // Add any images or videos
      possibleMediaIndices = _.range(1, _.size(allFields));
      _(possibleMediaIndices).forEach(function eachMediaIndex (index) {
        addMediaWithIndex('photo', index);
        addMediaWithIndex('video', index);
      });

      this._setupEmailValidation();
      this._setupEmojiValidation();

      return this;
    },

    /**
     * Basic (but not complete) validation of email addresses.
     *
     * This allows us to do client side checking before sending in things
     * that are obviously not email addresses. We are still relying on the
     * server side validation for full email address validation.
     */
    _setupEmailValidation: function _setupEmailValidation () {
      var $emailField = this.$form.find('.bv-email-field');
      var $emailInput = $emailField.find('input');
      var $emailHelperLabel = $emailField.find('.bv-helper-label');

      $emailInput.attr('aria-describedby', 'bv-invalid-email-for-aria-describedby');
      $emailHelperLabel.attr('id', 'bv-invalid-email-for-aria-describedby');
      // Add the new rule to the validator and to the email field.
      this.validator.addRule('emailValidation', emailValidationRule);
      this.validator.addSelectorRules($emailInput, { emailValidation: true });
    },

    /**
     * Validation that text fields don't contain any emoji. (Technically
     * it's testing for "astral characters", characters outside of Unicode's
     * Basic Multilingual Plane, but emoji is usually the culprit.)
     */
    _setupEmojiValidation: function _setupEmojiValidation () {
      // TODO: This rule should apply to all text fields, but there's no easy
      // way to do that in TooLegit after a validator has been created. Fix
      // that.
      var validator = this.validator;

      var $noEmoji = this.$form.find('input[type=text], input[type=email], textarea');
      this.validator.addRule('emojiValidation', emojiValidationRule);

      $noEmoji.each(function eachNoEmojiField (index, el) {
        validator.addSelectorRules($(el), { emojiValidation: true });
      });
    },

    /**
     * Checks to see if we had any initial form errors when loading the model.
     * If we did, we need to run #formErrorsPage to show the errors on the
     * corresponding fields.
     */
    _setupERRErrors: function _setupERRErrors () {
      var $activeElement;
      var formErrors = this.model.get('formErrors');

      if (formErrors) {
        // Display the errors
        this.formErrorsPage({ FormErrors: formErrors });

        // Transition focus to the first one, if present.
        $activeElement = $('.bv-error').first();
        if ($activeElement.length > 0) {
          this.updateActiveElementCSS($activeElement);
        }
        else {
          $activeElement = $('.bv-submission-rejection-errors');
          window.setTimeout(function deferedMoveFocus () {
            FocusManager.moveFocus($activeElement);
          }, 0);
        }
      }
    },

    /**
     * Open up the remote terms and conditions url in a new window.
     */
    _openTermsAndConditionsURL: function _openTermsAndConditionsURL (url) {
      var newWindow = window.open(url);
      newWindow.focus();
    },

    /**
     * checks what submission page is used (reviews, questions) and sets correct agreements type value
     */
    getAgreementsType: function getAgreementsType () {
      var agreementsType = this.model.get('contentType');
      if (agreementsType === 'answer') {
        agreementsType = 'question';
      }
      agreementsType = ContentType.nouns(agreementsType);
      return agreementsType;
    },

    // Service function to check is url valid
    isUrlValid: function isUrlValid (url) {
      var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      if (res === null) {
        return false;
      }
      else {
        return true;
      }
    },

    /**
     * Open the terms and conditions view or window.
     *
     * @param  {Event} e The event that triggered opening the terms and conditions
     */
    goToAgreements: function goToAgreements (e) {
      var self = this;
      var view;
      var mbConfig;
      var lightbox;
      var tcBox;
      var oldHeight;
      var agreementsType = self.getAgreementsType();
      var agrField;
      var name = $(e.currentTarget).closest('fieldset').find('input:first').attr('name');
      var prefix = 'agreements_' + agreementsType + '_';
      var urlFromAgreements;

      name = name.replace(prefix, '');

      agrField = this.model.attributes.agreements[agreementsType][name];

      e.preventDefault();

      // UIA-5830
      // If the client has configured a terms and conditions link, open that
      // link in a new tab or window instead of opening a new view.
      if (agrField.displayType === 'REMOTE_URL') {
        urlFromAgreements = $(e.target).attr('href');
        // If tag 'a' has valid url in href attribute go there.
        // If not, open window with url specified in the Config for this agreements. See CCS-32302.
        if (this.isUrlValid(urlFromAgreements) && (agrField.remoteUrl !== urlFromAgreements)) {
          this._openTermsAndConditionsURL(urlFromAgreements);
          return;
        }

        this._openTermsAndConditionsURL(agrField.remoteUrl);
        return;
      }

      view = new SubmissionSubviews.TermsConditionsView({
        parent: this,
        componentId: this.model.get('componentId'),
        fields: agrField
      });

      mbConfig = {
        title: agrField.agreementTitle,
        view: view,
        inline: false,
        // Changed to 'true' according to CCS-16210. With out role="dialog" screen
        // readers don't start to read opened T&C box automatically
        ariaDialog: true,
        ariaDescribedby: 'bv-terms-conditions',
        overlay: false
      };

      // open t&c in lightbox if submission form is inline
      if (this.inline) {
        mbConfig.wrapClass = 'bv-core-container-' + ENV.get('config').version;
        ModestBox.get('lightbox').open(mbConfig);
        return;
      }

      // If the submission form is in a lightbox, we have to get creative.
      // For accessibility reasons, we must open the T&C in a box _without_
      // role="dialog", or else the content won't get properly read by screen
      // readers. That means it can't be in the same box as the submission
      // form.
      //
      // The workaround is to create a different box just for the T&C, then
      // make it appear above the review lightbox when opened.
      lightbox = ModestBox.get(this.modestBoxId);

      // Make the lightbox ignore any press of ESC, and also make it stop
      // obsessively resizing to fit its content.
      lightbox.ignoreKeys = true;
      lightbox.skipResizing = true;

      tcBox = ModestBox.get('terms-and-conditions');

      // After the box opens, we make the lightbox take up the same
      // dimensions as the T&C box so that none of the review content peeks
      // out underneath.
      tcBox.once('afterOpen', function onceAfterOpen () {
        var tcHeight;

        if (lightbox.inline || lightbox.over) {
          return;
        }
        oldHeight = lightbox.$layerList.height();
        tcHeight = tcBox.$layerList.height();

        lightbox.$layerList.height(tcHeight);
      });

      tcBox.open(mbConfig);

      // After the box closes, we can tell it to pay attention to ESC again
      // and to start resizing itself again.
      tcBox.once('afterClose', function onceAfterClose () {
        lightbox.$layerList.height(oldHeight);
        lightbox.ignoreKeys = false;
        lightbox.skipResizing = false;
      });
    },

    setupUIElements: function setupUIElements () {
      var self = this;

      // If it is an inline form, we need to trigger doShowContent callback.
      var clientAPIConfig = this.model.get('clientAPIConfig');
      var doShowContent = this.inline ? (clientAPIConfig || {}).doShowContent || $.noop : $.noop;

      function _setupUIElements () {
        try {

          self._setFocusOnForm();
        }
        catch (e) {}
      }

      if (doShowContent(
        null/* application*/,
        null/* displayCode*/,
        null/* subject*/,
        null/* deepLinkId*/,
        _setupUIElements/* callback*/,
        null/* source*/
      ) !== false) {
        _setupUIElements();
      }
    },

    // TODO clean this up
    _setFocusOnForm: function _setFocusOnForm () {},

    /**
     * If collectOnSubmit is enabled, we check the clientAPIConfig
     * (BV.configure call) and copy over any catalogProducts, catalogBrands,
     * or catalogCategories.
     */
    _sendCollectOnSubmitEvent: function _sendCollectOnSubmitEvent () {
      var clientAPIConfig;
      var catalogData;

      if (!this.hasFeature('collectOnSubmit')) {
        return;
      }

      clientAPIConfig = this.model.get('clientAPIConfig') || {};
      catalogData = clientAPIConfig.catalogData || {};

      BVTracker.feature({
        type: 'Used',
        name: 'Submission',
        detail1: 'CollectOnSubmit',
        bvProduct: ProductInfo.getType(this),
        locale: catalogData.locale || null,
        catalogProducts: catalogData.catalogProducts || null,
        catalogBrands: catalogData.catalogBrands || null,
        catalogCategories: catalogData.catalogCategories || null,
        deploymentZone: ENVConfig.siteId
      });
    },

    _sendGRSEvent: function _sendGRSEvent () {
      if (!this.isGenericSubmission) {
        return;
      }

      // The user submitted a review from GWAR. Fire off a Magpie event.
      BVTracker.feature({
        type: 'Used',
        name: 'Submission',
        detail1: 'GenericReviewSubmission',
        bvProduct: ProductInfo.RATINGSANDREVIEWS,
        productId: ProductInfo.getId(this),
        categoryId: ProductInfo.getCategoryId(this)
      });
    },

    _sendNotificationsSubmissionEvent: function _sendNotificationsSubmissionEvent () {
      BVTracker.feature({
        type: 'Used',
        name: 'Submission',
        detail1: 'submissionFormSubmit',
        source: 'firebird',
        notificationId: this.model.get('bvNotificationId'),
        messageType: this.model.get('bvMessageType'),
        recipientDomain: this.model.get('bvRecipientDomain'),
        contentId: this.model.get('bvQuestionId'), // Only exists for APO.

        // Has to be lowercased.
        clientName: ENVConfig.clientname.toLowerCase(),
        bvProduct: ProductInfo.getType(this),
        productId: ProductInfo.getId(this),
        campaignId: this.model.get('campaignId'),
        userLocale: ENVConfig.locale,
        dc: ENVConfig.displaycode,
        deploymentZone: ENVConfig.siteId
      });
    },

    /**
     * This function is called after the rpc submission succeeds.
     * It does couple things:
     *    1. Save submission response.
     *    2. Fire feature specific tracking events such as 'CollectOnSubmit'
     *       or 'GenericReviewSubmission'.
     *    3. Emit a ClientEvents 'submissionSubmitted' event.
     *    4. Complete any fingrprinting work.
     *    5. trigger "contentSubmitted"
     *    5. trigger "showthankyoupage" if "thankYouPage" feature is enabled.
     *
     * @param response - response returned by API.
    */
    postSubmission: function postSubmission (response) {
      var self = this;
      var contentResponse = this.saveSubmission(response);

      var content = {
        view: this,
        response: contentResponse
      };

      var submissionId = content.response.SubmissionId;

      this._sendCollectOnSubmitEvent();
      this._sendGRSEvent();
      this._sendNotificationsSubmissionEvent();

      ClientEvents.trigger(
        'submissionSubmitted',
        this.model.get('clientAPIConfig'),
        { contentType: this.model.get('contentType') }
      );

      // Make sure to complete the fingerprinting work before showing the
      // thank you page. We purposefully delay showing the thank you page
      // so that users don't close the page until after fingerprinting
      // has completed.
      this.model.get('fingerprint').postSubmitAction(
        submissionId,
        function postSubmitActionCallback () {
          self.model.publish('contentSubmitted', content);

          if (!self.hasFeature('thankYouPage')) {
            return self.previewSubmission(contentResponse);
          }

          self.off('ModestBox:beforeClose');

          self.trigger('showthankyoupage', content);

          self.triggerPageView({
            label: 'Lightbox',
            value: 'ThankYou',
            submissionId: submissionId
          });
        }
      );
    },

    /**
     * Save submission response in Session
     * save AuthorToken in User
     *
     * @param response - response returned by API.
    */
    saveSubmission: function saveSubmission (response) {
      var hasSubmittedKey;
      var hasSubmittedObject;
      var subject = this.model.getSubject();
      var contentResponse = response[ContentType.Noun(subject.contentType)];

      // KLUDGE: This will break if a client ever changes their rating
      // range setting. Ideally this value would be a part of the
      // response.
      contentResponse.RatingRange = ENVConfig.submission.rating.range;
      contentResponse._contentType = subject.contentType;
      contentResponse.SubmissionTime = isodate();
      contentResponse.SubmissionId = response.SubmissionId;

      if (ContentType.noun(this.model.get('contentType')) === 'review') {
        this.model.set('submissionResponse', contentResponse);
      }

      if (response.AuthorSubmissionToken) {
        User.save({ token: response.AuthorSubmissionToken });
      }

      hasSubmittedKey = 'hasSubmitted' + '-' + subject.id + '-' + subject.contentType;
      hasSubmittedObject = {};
      hasSubmittedObject[hasSubmittedKey] = true;
      User.save(hasSubmittedObject);

      return contentResponse;
    },

    /**
     * Trigger "previewcontent" event on submission model (if
     * "submissionPreview" feature is defined)
     *
     * @param response - submission saved response.
    */
    previewSubmission: function previewSubmission (response) {
      var mb;

      BVReporter.assert(_(response).isObject(), 'preview submission requires a response object');

      // We need to give previews an approved moderation status.
      // This lets us show 'you' instead of 'Anonymous'.
      // This is never submitted or shown to any other users,
      // so it's perfectly safe.
      response.Author = response.Author || {};
      response.Author.ModerationStatus = 'APPROVED';

      if (this.model && this.model.hasFeature('submissionPreview')) {
        mb = ModestBox.get(this.ModestBoxId);
        if (mb.opened) {
          mb.close(true);
        }

        if (this.model.get('contentType') === 'comment') {
          this.model.trigger('previewsecondarycontent', this.model.get('subjectId'), response);
        }
        else {
          this.model.trigger('previewcontent', response);
        }
      }
    },

    /**
     * Show submission failed errors on the form
     *
     * @param response - rpc submission response.
    */
    formErrorsPage: function formErrorsPage (response) {
      // There were server side errors, so show them on the form.
      var self = this;
      var $invalidElements;
      var errorCode;
      var messageFn;
      var message;

      var $form = self.$el.find('form');
      var submissionErrors = [];
      var unrecoverableFormErrors = [];

      // We keep track of this so that we can query all the invalid fields in
      // document order later on so that we can mark them as invalid.
      var invalidElementSelectors = [];

      // There are two kinds of errors: validation errors (which are
      // associated with a field) and general errors (which are not).
      var fieldErrors = response.FormErrors.FieldErrors;
      if (fieldErrors && !_.isEmpty(fieldErrors)) {

        // Loop through the server side errors.
        _(response.FormErrors.FieldErrors).forEach(function forEachError (error) {
          var $errorElement;
          var methodName;
          var newRules;
          var isMedia;

          var selector = '[name=' + error.Field + ']';
          invalidElementSelectors.push(selector);
          $errorElement = $form.find(selector);
          methodName = error.Field + serverValidationSuffix;
          newRules = {};

          // If this is a photo/video error we should handle this differently.
          // More specifically, we determine whether each media item has an
          // error at time of render by comparing its unique id against the
          // list of errors for the submission.
          isMedia = error.Field.indexOf('photo') >= 0 || error.Field.indexOf('video') >= 0;
          if (isMedia) {
            return;
          }

          // Any errors with hidden fields are unrecoverable since users aren't able
          // to change its value.
          if ($errorElement.attr('type') === 'hidden') {
            unrecoverableFormErrors.push(error);
            return;
          }

          newRules[methodName] = true;
          self.serverErrors.push(methodName);

          // Add a validator method that represents the server side error.
          self.validator.addRule(
            methodName,
            (function addRuleCallback () {
              var enabled = true;
              return function hellIfIKnowWhatThisDoes ($el, param, otherRules) {
                var myMessage;

                // If the field hits 0 length, disable server validation error.
                if (enabled && ($.trim($el.val()).length === 0)) {
                  enabled = false;
                }

                if (enabled) {

                  myMessage = errorMessages.defaultMessage(error);

                  return {
                    type: 'server',
                    code: error.Code,
                    message: myMessage
                  };
                }
                else {
                  return false;
                }
              };
            })()
          );

          // Add the new method to the element that had the error and show it.
          self.validator.addSelectorRules($errorElement, newRules);

          // Add the additional class if the field is overall rating, see UIA-8927
          self.addRejectionClass($errorElement);

          self.validator.check($errorElement);
        });

        if (unrecoverableFormErrors.length === 0) {
          // The server didn't necessarily return the fields to us in document
          // order. So now we query the form for the same fields we already have
          // because the result is _guaranteed_ to be in document order.
          $invalidElements = $form.find(invalidElementSelectors.join(', '));

          if ($invalidElements.length > 0) {
            // Use the validator to draw attention to the invalid fields.
            self.validator.showInvalid($invalidElements);
          }
        }
      }

      if (response.Errors && response.Errors.length) {
        this.model.trigger('queryError', response.Errors);

        // These errors are not form field errors. It could be that
        // a hosted auth parameter is missing, the API key is invalid,
        // a user ID is missing, et cetera.
        submissionErrors.push(response.Errors[0]);
      }

      // For unrecoverable errors, we show a generic message in a layer that
      // replaces the submission form.
      if (unrecoverableFormErrors.length) {
        self.trigger('showcannotsubmitpage', { view: self });
      }
      // For general submission errors, we show our standard error view in
      // a new box layer. We don't know which of the general errors are recoverable
      // and which aren't, so we'll just show the message and let the user
      // dismiss it to return to the submission form.
      else if (submissionErrors.length) {
        errorCode = submissionErrors[0].Code;
        messageFn = msgPack['error_' + errorCode];
        message = _.isFunction(messageFn) ? messageFn() : null;

        self.trigger('showcannotsubmitpage', {
          view: self,
          message: message,
          isRecoverable: true
        });
      }

      self._reportErrors(unrecoverableFormErrors, true);
      self._reportErrors(submissionErrors);

      // Re-enable submission button.
      $form.find('.bv-submit').removeProp('disabled');
    },

    cleanup: function cleanup () {
      var dropdownView;

      dropdownView = this.getFeatureView('dropdownable');

      if (dropdownView) {
        dropdownView.popOut();
      }
    },

    triggerPageView: function triggerPageView (obj) {
      var pageview = this.model.get('pageview');

      if (!pageview) {
        return;
      }

      BVTracker.pageview(_(obj || {}).defaults({
        type: 'Product',
        label: 'Lightbox',
        context: 'Write',
        bvProduct: pageview.bvProduct,
        productId: ProductInfo.getId(this)
      }), this.model);
    },

    _reportErrors: function _reportErrors (_errors, isFormError) {
      var errors;

      if (!_errors.length) {
        return;
      }

      errors = _.map(_errors, function mapErrors (error) {
        return {
          name: isFormError ? bvStrings.errors.FORM : bvStrings.errors.API,
          detail1: error.Code,
          detail2: error.Message
        };
      });

      BVTracker.error(errors);
    },

    /**
     * Figures out the first submission field and moves the
     * focus to it.
    */
    moveInitialFocus: function moveInitialFocus () {
      var $form = this.getForm();

      // Figure out what to focus first.
      // TODO: Figure out a better way to decide initial focus.
      var focusableQueries = [
        'input.bv-focusable:visible',
        'textarea.bv-focusable:visible',
        '.bv-submission-star-rating-control .bv-rating-link:visible'
      ];
      var focusableQueryString = focusableQueries.join(', ');
      var $firstFocusable = $form.find(focusableQueryString).eq(0);

      if ($firstFocusable.length) {
        _.delay(function delayFocus () { FocusableView.moveFocus($firstFocusable); }, 0);
      }
    }
  });
});

/* START_TEMPLATE */
BV.define('hbs!thankYou',['hbs','vendor/handlebars/runtime', 'template/helpers/view', 'template/helpers/renderIcon', 'template/helpers/unlessHasFeature', 'template/helpers/mountView'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " <hgroup class=\"bv-submission-message\"> ";
  options = {hash:{
    'classList': ("bv-submission-icon"),
    'ariaHidden': ("true")
  },inverse:self.noop,fn:self.program(2, program2, data)};
  stack2 = ((stack1 = helpers.renderIcon),stack1 ? stack1.call(depth0, "bv-sprite-thank-you", options) : helperMissing.call(depth0, "renderIcon", "bv-sprite-thank-you", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <span id=\"bv-mbox-label-text\" class=\"bv-submission-text\">";
  if (stack2 = helpers.message) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.message; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> </hgroup> ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data)};
  stack2 = ((stack1 = helpers.unlessHasFeature),stack1 ? stack1.call(depth0, "socialConnect", options) : helperMissing.call(depth0, "unlessHasFeature", "socialConnect", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.mountView),stack1 ? stack1.call(depth0, "socialConnect", depth0, options) : helperMissing.call(depth0, "mountView", "socialConnect", depth0, options)))
    + " ";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.mountView),stack1 ? stack1.call(depth0, "searchContentList", depth0, options) : helperMissing.call(depth0, "mountView", "searchContentList", depth0, options)))
    + " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " ";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.mountView),stack1 ? stack1.call(depth0, "localSocialSharing", depth0, options) : helperMissing.call(depth0, "mountView", "localSocialSharing", depth0, options)))
    + " ";
  return buffer;
  }

  buffer += " ";
  options = {hash:{
    'tag': ("div"),
    'classList': ("submission submission-thankyou submission-message-container focusable"),
    'ariaLabelledBy': ("bv-mbox-label-text"),
    'tabindex': ("0")
  },inverse:self.noop,fn:self.program(1, program1, data)};
  stack2 = ((stack1 = helpers.view),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "view", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('thankYou', t);
t.deps = [];
t.tplMountedViews = ['localSocialSharing','socialConnect','searchContentList'];
return t;
});
/* END_TEMPLATE */
;
BV.define('bv/c2013/view/thankYouPage',[
  'framework/bview',
  'hbs!thankYou'
], function (BView, template) {
  return BView.extend({
    name: 'thankYouPage',
    classList: ['thankyou'],

    template: template

  });
});

/* START_TEMPLATE */
BV.define('hbs!textDropdown',['hbs','vendor/handlebars/runtime', 'template/helpers/renderIcon'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var stack1, stack2, options;
  options = {hash:{
    'classList': ("bv-close-btn"),
    'ariaHidden': ("true")
  },inverse:self.noop,fn:self.program(2, program2, data)};
  stack2 = ((stack1 = helpers.renderIcon),stack1 ? stack1.call(depth0, "bv-sprite-close", options) : helperMissing.call(depth0, "renderIcon", "bv-sprite-close", options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  }
function program2(depth0,data) {
  
  
  return " &#x2718; ";
  }

  buffer += " <div class=\"bv-cleanslate bv-cv2-cleanslate bv-absolute-top-container\" role=\"region\" aria-label=\"Guidelines\"> <div class=\"bv-core-container-";
  if (stack1 = helpers.version) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.version; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> <div class=\"bv-shared bv-popup-container\"> <!--[if lt IE 7]> <div class=\"bv-compat bvie6 bvie-lt8 bvie\"> <![endif]--> <!--[if IE 7]> <div class=\"bv-compat bvie7 bvie-lt8 bvie\"> <![endif]--> <!--[if IE 8]> <div class=\"bv-compat bvie8 bvie\"> <![endif]--> <!--[if IE 9]> <div class=\"bv-compat bvie9 bvie\"> <![endif]--> <!--[if gt IE 9]> <!--><div class=\"bv-compat\"> <!--<![endif]--> <div id=\"";
  if (stack1 = helpers.dropdownId) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.dropdownId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"bv-popup bv-textdropdown\"> ";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.autoOpen, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </div> </div> </div> </div> </div> ";
  return buffer;
  });
Handlebars.registerPartial('textDropdown', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/**
 *  @fileOverview Backbone view that displays a tooltip-like overlay that
 *  points at a certain element on hover or focus.
 */
BV.define('bv/ui-core/textDropdown',[
  'ENV',
  'window',
  'body',
  'backbone',
  'underscore',
  'jquery',
  'hbs!textDropdown',
  'framework/util/bvreporter',
  'util/specialKeys'
], function (ENV, window, body, Backbone, _, $, template, BVReporter, specialKeys) {
  // We won't be server rendering or doing anything special,
  // so let's skip our extra work
  // Note: there is also no model
  return Backbone.View.extend({
    options: {
      alwaysShow: true,
      stylize: true,
      attachDelay: 50,
      detachDelay: 500,
      popinClass: 'bv-popup-in',
      popoutClass: 'bv-popup-out',
      dimensionStyle: 'containerOverflow',
      inModestBox: false,
      inModestBoxClass: 'bv-dropdown-inmbox',
      popInEvent: 'mouseenter',
      popOutEvent: 'mouseleave',
      popInOpened: false
    },

    initialize: function (options) {
      BVReporter.assert(options, 'options are provided to textDropdown initialize method');

      this.text = options.text;
      _(this.options).extend(options);
      this.id = 'bv-textdropdown-' + Math.floor(Math.random() * 1e10);
      this.options.dimensionStyle = this.options.dimensionStyle || 'containerOverflow';

      this.escKeyEventName = 'keyup.' + this.id;

      if (this.options.dimensionStyle === 'sliderTextOverflow') {
        this.options.popInEvent = 'mouseenter focusin';
        this.options.popOutEvent = 'mouseleave focusout';
      }

      if (this.options.dimensionStyle === 'helperTextOverflow') {
        this.options.popInEvent = 'focus';
        this.options.popOutEvent = 'blur';
      }

      // TODO: Simplify this logic when default focus on dialogs like 'Add Photo' is refactored
      this.isElFocusable = this.$el.hasClass('bv-focusable') || this.$el.find('.bv-focusable').length > 0;

      BVReporter.assert(
        this.isElFocusable || (this.options.inModestBox && $('#bv-mbox-lightbox-list').length > 0),
        'textDropdowns need a focusable element or a modestbox to target'
      );

      if (this.isElFocusable) {
        // If this element or its child has class .bv-focusable, it is the target
        // This covers textDropdowns for form fields or inputs like sliders, etc
        this.$target = this.$el;
      }
      else {
        // Otherwise, it attaches to the mbox's initial active element if it is present
        // This covers textDropdowns attached to dialogs such as 'Add Photo' or 'Add Video'
        this.$target = $('#bv-mbox-lightbox-list');
      }

      if (this.options.autoOpen) {
        this.popIn();
      }
      else {
        this.attach();
      }

      // adjust popin delay if it is inModestBox
      if (this.options.inModestBox) {
        this.options.attachDelay = 0;
      }
    },

    attach: function () {
      var that = this;

      if (this.options.disableEvents) { return; }

      this.$el.on(this.options.popInEvent, function () {
        if (!that.options.popInOpened) {
          that.popIn();
        }
      });

      this.$el.on(this.options.popOutEvent, function () {
        that.popOut();
      });
    },

    // These events are on the TARGET (the thing you hover over)
    // So they are intentionally left blank
    // events : {},

    stylize: function (text) {
      // Add in html based on simple rules for bold, italic, etc.
      // maybe support markdown if we need a ton
      return '<div id="bv-guidelines-label" class="bv-dropdown-style-' + this.options.dimensionStyle + '-inner" >' + text + '</div>';
    },

    setDropdownEvents: function () {
      var that = this;
      this.$dropdownContainer.find('.bv-close-btn').click(function () {
        that.popOut();
      });
    },

    // Different modes require different positioning, so write yours here
    dimensionFilters: {
      containerOverflow: function (target, container) {
        var css = {
          position: 'absolute',
          opacity: 0
        };

        var $target = $(target);
        var $container = $(container);

        // Grab absolute offsets
        var targetOffset = $target.offset();
        var containerOffset = $container.offset();

        var inner, arrow;

        // Make the popup the width of the whole container and then overflow it by 10
        css.width = ($container.outerWidth() + 20);

        // Start the popup 10px left of the container (for the overflow effect)
        css.left = (containerOffset.left - 10);

        // Start it 10px below the bottom of the target for room for the arrow and slide in
        css.top = (targetOffset.top + $target.outerHeight(true) + 30);

        inner = {
          // set the inner width to the width of the container minus it's borders and such
          // hard code this, since we'd have to render it off screen to actually figure it out
          // on the fly. We can do that when we make the margin and padding configurable...
          width: css.width - 22
        };

        arrow = {
          left: targetOffset.left - css.left + ($target.outerWidth(true) / 2)
        };

        // Return object for mixin
        return {
          outer: css,
          inner: inner,
          arrow: arrow
        };
      },
      helperTextOverflow: function (target, container) {
        var css = {
          position: 'absolute',
          opacity: 0
        };

        var $target = $(target);
        var $container = $(container);

        // Grab absolute offsets
        var targetOffset = $target.offset();
        var containerOffset = $container.offset();

        var inner, arrow;

        // Make the popup 1/3 of the width of the whole container and then overflow it by 10
        css.width = ($container.outerWidth() / 3 - 20);

        // Start the popup a width left of the container (for the overflow effect)
        css.left = containerOffset.left - css.width;

        // Start it 30px above the top of the target.  This match the "Reviews" title
        css.top = targetOffset.top - 30;

        inner = {
          // set the inner width to the width of the container minus it's borders and such
          // hard code this, since we'd have to render it off screen to actually figure it out
          // on the fly. We can do that when we make the margin and padding configurable...
          width: css.width - 21
        };

        arrow = {
          left: containerOffset.left - css.left - 10,
          top: 10
        };

        // Return object for mixin
        return {
          outer: css,
          inner: inner,
          arrow: arrow
        };
      },
      sliderTextOverflow: function (target, container) {
        var css = {
          position: 'absolute',
          opacity: 0
        };

        var $target = $(target);
        var $container = $(container);

        // Grab absolute offsets
        var targetOffset = $target.offset();
        // var containerOffset = $container.offset();

        var inner, arrow;

        // Make the popup half of the width of the whole container and then overflow it by 10
        css.width = ($container.outerWidth() / 4);

        // Start the popup 10px left of the container (for the overflow effect)
        css.left = targetOffset.left + ($target.outerWidth(true) / 2) - (css.width / 2) + 10;

        // Start it (5px + height) above the top of the target
        css.top = (targetOffset.top - 10 - $target.outerHeight(true));

        inner = {
          // set the inner width to the width of the container minus it's borders and such
          // hard code this, since we'd have to render it off screen to actually figure it out
          // on the fly. We can do that when we make the margin and padding configurable...
          width: css.width - 22
        };

        // set the arrow position
        arrow = {
          left: targetOffset.left - css.left + ($target.outerWidth(true) / 2) - 2
        };

        // Return object for mixin
        return {
          outer: css,
          inner: inner,
          arrow: arrow
        };
      }
    },

    adjustFilters: {
      sliderTextOverflow: function () {
        var lineHeight = parseInt(this.$innerContainer.css('lineHeight').replace('px', ''), 10) + 25; // lineHeight + padding
        var height = this.$innerContainer.outerHeight();
        var newTop;
        // if multiple line text, we need to adjust the top of $dropdownContainer
        if (height > lineHeight) {
          newTop = parseInt(this.$dropdownContainer.css('top').replace('px', ''), 10) + lineHeight - height;
          this.$dropdownContainer.css('top', newTop + 'px !important;');
        }

        if (this.injectedArrayDimension) {
          this.injectedArrayDimension.top = height - 2;
        }
      }
    },

    injectArrowStyles: function (arrow) {
      // fall back and back and back
      var injectedArrow = document.createElement('div');

      injectedArrow.classList.add('bv-fieldset-arrow-icon');
      injectedArrow.style.setProperty('left', arrow.left + 'px', 'important');
      if (arrow.top) {
        injectedArrow.style.setProperty('top', arrow.top + 'px', 'important');
      }
      $('#' + this.id + ' div').before(injectedArrow);

      this.injectedArrayDimension = arrow;
    },

    addStyles: function () {
      var css = this.dimensionFilters[this.options.dimensionStyle].call(
        this,
        this.options.positionTarget,
        this.options.outerContainer
      );

      // Set the properties directly on the element
      this.$dropdownContainer.css(css.outer);
      this.$innerContainer.css(css.inner);
      this.injectArrowStyles(css.arrow);
    },

    /**
     *  Show the TextDropdown. Waits for DOM ready.
     */
    popIn: function () {
      var that = this;
      var popInDelay = this.options.attachDelay;

      // Wait for dom ready
      $(function () {
        var resizeHandler;
        var offset;

        // This creates everything but doesn't throw it in the dom yet.
        that.render();

        // Inject it into the bottom of the dom
        $(body()).append(that.$dropdownContainer);

        // Add id to ul element inside of photo/video guidelines to make it readable by VO+Safari. See CCS-30319.
        that.$dropdownContainer.find('ul').attr('id', 'bv-media-guidelines-ul');

        // Do not put aria-describedby to photo guideliness to avoid duplicate announcment. See CCS-30319.
        if (!that.$target.filter("[name='photo']")) {
          that.$target.attr({ 'aria-describedby': that.id });
        }

        // attach resize handler
        resizeHandler = function () {
          that.addStyles();
        };
        resizeHandler();
        $(window).bind('resize.' + that.id, _.debounce(resizeHandler, 200));

        // IE needs this fix (as do old versions of Safari), or else the
        // .bv-compat container will have a height of 0 and none of the
        // content will be visible.
        if (that.$compatContainer.outerHeight() <= 0) {
          that.$compatContainer.css('height', that.$innerContainer.outerHeight());
        }

        that.$target.off(that.escKeyEventName).on(that.escKeyEventName, function (e) {
          if (e.keyCode === specialKeys.ESCAPE) {
            e.preventDefault();
            e.stopImmediatePropagation();
            that.popOut();
          }
        });

        if (!that.options.alwaysShow) {
          // We won't show this textDropdown unless we're sure we have enough space to do it.
          offset = that.$dropdownContainer.offset();
          if (offset.top < 0 || offset.left < 0) {
            // We won't show this textDropdown because we don't have enough
            // room to fit all of it inside the viewport.
            return;
          }
        }

        that.options.popInOpened = true;

        // Let a cycle happen, then add in the transition
        setTimeout(function () {
          var adjustFn;
          // Add the transition class
          that.$dropdownContainer.addClass(that.options.popinClass);
          that.$dropdownContainer.addClass(that.options.popinClass + '-' + that.options.dimensionStyle);

          adjustFn = that.adjustFilters[that.options.dimensionStyle];
          if (adjustFn) {
            adjustFn.apply(that);
          }
        }, popInDelay);
      });
    },

    /**
     *  Hide the TextDropdown.
     */
    popOut: function () {
      var that = this;
      var popOutDelay = this.options.detachDelay;
      var $dropdownContainer;
      // Add the transition class
      if (this.$dropdownContainer) {
        this.$dropdownContainer.addClass(this.options.popoutClass);
      }

      this.$target.attr({ 'aria-describedby': null }).off(this.escKeyEventName);

      $(window).unbind('resize.' + that.id);

      // We retain a reference to the dropdown container as it exists right
      // now. We use this reference in the setTimeout closure (instead of
      // referencing `that.$dropdownContainer`) because by the timeout runs,
      // `that.$dropdownContainer` may refer to a different element.
      $dropdownContainer = this.$dropdownContainer;

      that.options.popInOpened = false;

      // On a delay remove it from the dom
      // we can't remove it right away, because there's an animation
      setTimeout(function () {
        // Just remove since detach leaves the events and we reattach
        // each time. TODO:: worth optimizing?
        if ($dropdownContainer) {
          $dropdownContainer.remove();
        }
        that.injectedArrayDimension = null;
      }, popOutDelay);
    },

    render: function () {
      // Render the simple html without a model
      var html = template({
        text: this.options.stylize ? this.stylize(this.text) : this.text,
        version: ENV.get('config').version,
        dropdownId: this.id,
        autoOpen: this.options.autoOpen
      });

      // Create the element
      this.$dropdownContainer = $(html);
      this.$innerContainer = this.$dropdownContainer.find('.bv-popup');

      // Some browsers need adjustments to this container, so we save a
      // reference for later.
      this.$compatContainer = this.$dropdownContainer.find('.bv-compat');

      // Add in a class for styling based on dimension style
      this.$innerContainer.addClass('bv-dropdown-style-' + this.options.dimensionStyle);

      // Set base styles before injecting
      this.addStyles();

      // Attach events to it
      this.setDropdownEvents();

      // Add z-index level class
      if (this.options.inModestBox) {
        this.$dropdownContainer.addClass(this.options.inModestBoxClass);
      }
    },

    close: function () {
      if (this.$dropdownContainer) {
        this.popOut();
      }
    }
  });
});

/**
 *  @fileOverview Firebird view responsible for wrapping around a plain
 *  TextDropdown view.
 */
BV.define('bv/c2013/view/dropdownable',[
  'framework/bview',
  'jquery',
  'underscore',
  'bv/ui-core/textDropdown'
], function (BView, $, _, TextDropdown) {
  return BView.extend({
    name: 'dropdownable',

    // If you add options that need to be consumed as data attributes,
    // ensure that you add the attribute here, but also
    // update the `dataAttributes` below
    options: {
      // Truthy / falsy, provided values don't matter
      inModestBox: 'data-bv-dropdown-inmbox',
      autoOpen: 'data-bv-dropdown-autoopen',
      positionTarget: 'data-bv-dropdown-position-target',
      disableEvents: 'data-bv-dropdown-disable-events',
      alwaysShow: 'data-bv-dropdown-always-show',

      // Presence doesn't mean anything, needs an actual value
      style: 'data-bv-dropdown-style',
      text: 'data-bv-dropdown-text'
    },

    dataAttributes: 'inModestBox autoOpen positionTarget disableEvents alwaysShow style text'.split(' '),

    // Don't output any html
    template: function () {
      return '';
    },

    // Intentionally override to blank
    render: function () {},

    dropdowns: {},

    // This used to exist on BView, but we used it in only two places.
    getHashId: function () {
      var parent = this.parent;
      return [parent.name, parent.uniq, this.name, this.uniq].join('_');
    },

    _createDropdown: function (targetEl, options) {
      var dropdown = new TextDropdown({
        autoOpen: options.autoOpen,
        el: targetEl,
        text: options.text,
        outerContainer: this.parent.$el[0],
        inModestBox: options.inModestBox,
        dimensionStyle: options.style,
        positionTarget: options.positionTarget,
        disableEvents: options.disableEvents,
        alwaysShow: options.alwaysShow
      });

      // TODO: Each Dropdownable seems to be designed to manage exactly one
      // TextDropdown, but I'm not sure why we decided to store them in a
      // global hashtable instead of just having one on each Dropdownable
      // instance. I can't find a place where we operate on them in bulk.
      this.dropdowns[this.getHashId()] = dropdown;

      return dropdown;
    },

    _deleteDropdown: function () {
      delete this.dropdowns[this.getHashId()];
    },

    attach: function (elToAttach) {
      var that = this;
      this.$base = this.parent.$el;

      this.targetEls = this.$base.find('[' + this.options.text + ']');

      this.targetEls.each(function () {
        var $this = $(this);
        var options = {};

        // Consume all data attributes from the node, as defined in that.options
        // Note that we're using `each`, and we want an object.
        _(that.dataAttributes).each(function (name) {
          var attr = $this.attr(that.options[name]);
          options[name] = attr === '' || attr === 'true' || attr;

          if (options[name] === 'false') {
            options[name] = false;
          }
        });

        // Special case: alwaysShow
        // If missing, we assume `true`.
        if (options.alwaysShow !== false) {
          options.alwaysShow = true;
        }

        // Special case: positionTarget
        if (options.positionTarget) {
          // If there's a valid attribute, it will be an ID of a node
          // so prepend the hash
          options.positionTarget = '#' + options.positionTarget;
        }
        else {
          // No positionTarget,
          // so assume that we're positioning relative to ourself
          options.positionTarget = this;
        }

        that._createDropdown.call(that, this, options);
      });

      return BView.prototype.attach.apply(this, arguments);
    },

    _getDropdown: function () {
      return this.dropdowns[this.getHashId()];
    },

    /**
     *  Tell the TextDropdown to `popIn`.
     */
    popIn: function () {
      var dropdown = this._getDropdown();
      if (dropdown) {
        dropdown.popIn();
      }
    },

    /**
     *  Tell the TextDropdown to `popOut`.
     */
    popOut: function () {
      var dropdown = this._getDropdown();
      if (dropdown) {
        dropdown.popOut();
      }
      this._deleteDropdown();
    }
  });
});

BV.define('mappings!submission/views',[
"bv/c2013/view/submission",
"bv/c2013/view/thankYouPage",
"bv/c2013/view/dropdownable"
], function (
submissionView,
thankYouPageView,
dropdownableView
) { 
  var mappings = {
    submission : {name : 'submission', view : submissionView},
    thankYouPage : {name : 'thankYouPage', view : thankYouPageView},
    dropdownable : {name : 'dropdownable', view : dropdownableView},
    starHoverHeatMap : { name : 'starHoverHeatMap', has : { name : 'starHoverHeatMap'}},
    submissionPreview : { name : 'submissionPreview', has : { name : 'submissionPreview'}},
    reviewHelperText : { name : 'reviewHelperText', has : { name : 'reviewHelperText'}},
    mbox : { name : 'mbox', has : { name : 'mbox'}}
  };



  return mappings;

});

BV.define('bv/util/xdmPost',[
  'ENV',
  'underscore',
  'jquery',
  'bv/util/withRPC',
  'bv/api',
  'util/url',
  'body',
  'bv/strings'
], function (ENV, _, $, withRPC, api, Url, body, bvStrings) {

  function xdmPost (action, dataToPost) {
    var dfd = $.Deferred();
    var rpcReady = $.Deferred();
    var $form;
    dataToPost.callback = bvStrings.rpc.postCallback;
    var rpc = withRPC(rpcReady, function (response) {
      var errMsg;
      cleanup(rpc, $form);
      if (response && response.HasErrors === false) {
        dfd.resolve(response);
      }
      else {
        if (response && response.HasErrors) {
          errMsg = response.Errors[0].Code;
          dfd.reject(errMsg, response);
          return;
        }
        dfd.reject('APIERROR', response);
      }
    });
    rpcReady.then(
      function () {
        $form = createForm(action, dataToPost, rpc.channel);
        $form[0].submit();
      },
      function () {
        cleanup(rpc, $form);
        dfd.reject('RPCERROR');
      }
    );
    return dfd.promise();
  }

  function xdmPostAPI (action, dataToPost) {
    var apiConfig = api._config;
    var url = 'https:' + apiConfig.baseUrl + action;
    var locale = ENV.get('config').locale;
    var baseData = {
      passkey: apiConfig.passkey,
      apiversion: apiConfig.apiversion,
      displaycode: apiConfig.displaycode || '',
      ve: apiConfig.virtualEnvironment || ''
    };

    if (locale) {
      baseData.locale = locale;
    }

    return xdmPost(url, _.extend(baseData, dataToPost));
  }

  function createForm (action, formData, rpcChannel) {
    var $form = $('<form action="' + Url.caboose(action) + '" target="bv-submission-target-' + _.escape(rpcChannel) + '" method="POST"/>');
    _(formData).forEach(function (value, key) {
      $form.append('<input type="hidden" name="' + _.escape(key) + '" value="' + _.escape(value) + '"/>');
    });
    $form.appendTo(body());
    return $form;
  }

  function cleanup (rpc, $form) {
    try {
      rpc.destroy();
      $form.remove();
    } catch (e) {}
  }

  return {
    raw: xdmPost,
    api: xdmPostAPI
  };

});

BV.define('bv/ugc/feedback',[
  'ENV',
  'underscore',
  'bv/util/session',
  'bv/util/loadingOverlay',
  'bv/api',
  'bv/util/xdmPost',
  'window',
  'util/url',
  'jquery'
], function (ENV, _, Session, LoadingOverlay, api, xdmPost, window, url, $) {

  var ENVConfig = ENV.get('config');

  function sendFeedback (feedbackData) {
    var dfd = $.Deferred();
    var promise = dfd.promise();
    var key = feedbackData.contentType + '-' + feedbackData.feedbackType.charAt(0) + '-' + feedbackData.contentId;

    Session.get('feedbacks', function (feedbacks) {
      feedbacks = feedbacks || {};
      // If we've successfully sent feedback, remember it for this user.
      promise.done(function () {
        feedbacks[key] = feedbackData.feedbackType === 'inappropriate' ? true : {
          c: feedbackData.newCount,
          v: feedbackData.vote.charAt(0)
        };
        Session.set('feedbacks', feedbacks);
      });

      // See if user has already voted, if not, vote.
      var localData = feedbacks[key];
      if (!localData) {
        _sendFeedback(dfd, feedbackData);
      }
      else {
        // If someone already voted and somehow triggers voting again,
        // act like the request went through with a 'DUPLICATE' status.
        dfd.resolve('DUPLICATE', localData);
      }
    });

    return promise;
  }

  function _sendFeedback (dfd, sendData) {
    var data = _.clone(sendData);

    delete data.newCount;
    xdmPost.api('submitfeedback.json', data).then(
      function (response) {
        dfd.resolve(false, response);
      },
      function (err, response) {
        dfd.reject(err, response);
      }
    );
  }

  return {
    positive: function (contentType, contentId, newCount) {
      return sendFeedback({
        contentType: contentType,
        contentId: contentId,
        feedbackType: 'helpfulness',
        vote: 'positive',
        newCount: newCount
      });
    },
    negative: function (contentType, contentId, newCount) {
      return sendFeedback({
        contentType: contentType,
        contentId: contentId,
        feedbackType: 'helpfulness',
        vote: 'negative',
        newCount: newCount
      });
    },
    inappropriate: function (contentType, contentId) {
      return sendFeedback({
        contentType: contentType,
        contentId: contentId,
        feedbackType: 'inappropriate'
      });
    }
  };

});

BV.define('mf!bv/c2013/messages/postSubmission',['vendor/messageformat', 'framework/util/bvtrackerqueue'], function (MessageFormat, BVTrackerQueue) { 
  return {
"contentSubmitted_review" : function (x) { try { return (function(d){
var r = "";
r += "Your review was submitted!";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `contentSubmitted_review`: ' + e.toString() ) ] ); return ""; } },"contentSubmitted_comment" : function (x) { try { return (function(d){
var r = "";
r += "Your comment was submitted!";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `contentSubmitted_comment`: ' + e.toString() ) ] ); return ""; } },"contentSubmitted_question" : function (x) { try { return (function(d){
var r = "";
r += "Your question was submitted!";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `contentSubmitted_question`: ' + e.toString() ) ] ); return ""; } },"contentSubmitted_answer" : function (x) { try { return (function(d){
var r = "";
r += "Your answer was submitted!";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `contentSubmitted_answer`: ' + e.toString() ) ] ); return ""; } },"postSubmission_unknownError" : function (x) { try { return (function(d){
var r = "";
r += "Something went wrong. Please try again later.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `postSubmission_unknownError`: ' + e.toString() ) ] ); return ""; } },"postSubmission_errorOffScreenText" : function (x) { try { return (function(d){
var r = "";
r += "Press Escape to return to the form.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `postSubmission_errorOffScreenText`: ' + e.toString() ) ] ); return ""; } },"postSubmission_unrecoverableErrorOffScreenText" : function (x) { try { return (function(d){
var r = "";
r += "Press Escape to close this message";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `postSubmission_unrecoverableErrorOffScreenText`: ' + e.toString() ) ] ); return ""; } },"duplicateContent" : function (x) { try { return (function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "Gender";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"other" : function(d){
var r = "";
r += "You already submitted a review. Thanks!";
return r;
}
};
r += (pf_0[ k_1 ] || pf_0[ "other" ])( d );
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `duplicateContent`: ' + e.toString() ) ] ); return ""; } },"unavailableSubmission" : function (x) { try { return (function(d){
var r = "";
r += "We're sorry, submission is currently unavailable.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `unavailableSubmission`: ' + e.toString() ) ] ); return ""; } },"userVerified" : function (x) { try { return (function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "Gender";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"other" : function(d){
var r = "";
r += "Thanks! You have successfully authenticated your content.";
return r;
}
};
r += (pf_0[ k_1 ] || pf_0[ "other" ])( d );
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `userVerified`: ' + e.toString() ) ] ); return ""; } },"userAlreadyVerified" : function (x) { try { return (function(d){
var r = "";
r += "This email address has already been verified.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `userAlreadyVerified`: ' + e.toString() ) ] ); return ""; } },"ariaTitle_answer" : function (x) { try { return (function(d){
var r = "";
r += "Answer this Question";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `ariaTitle_answer`: ' + e.toString() ) ] ); return ""; } }
};
});

/**
 * @fileOverview Handles submission in a ModestBox.
 */
BV.define('bv/ugc/submission',[
  'ENV',
  'mappings!submission/views',
  'bv/util/submissionSubviews',
  'underscore',
  'bv/api/fetch',
  'bv/util/user',
  'bv/util/contentType',
  'bv/util/session',
  'bv/ui-core/modestbox',
  'bv/ui-core/focusableview',
  'bv/ugc/feedback',
  'bv/util/formMemory',
  'bv/util/loadingOverlay',
  'bv/util/productInfo',
  'mf!bv/c2013/messages/postSubmission',
  'mf!bv/c2013/messages/submission',
  'jquery',
  'framework/util/bvtracker',
  'bv/c2013/view/contentItem',
  'bv/c2013/model/contentItem',
  'BV'
], function (ENV, submissionViewMappings, SubmissionSubviews, _, api, User, ContentType, Session, ModestBox, FocusableView, Feedback, FormMemory, LoadingOverlay, ProductInfo, postMsgPack, msgPack, $, BVTracker, ContentItemView, ContentItemModel, BV) {

  var _lightbox;
  var lightboxOptions;
  // Build submission view mappings.
  var mappings = ENV.get('mappings');
  ENV.set('mappings', $.extend(true, {}, mappings, submissionViewMappings));

  // Default lightbox options.
  lightboxOptions = {};

  /**
   * Show the Thank You Page.
   *
   * @param  {Object} content The content to be displayed.
   */
  function thankYouPage (content) {
    var self = this;
    var view = content.view;
    var response = content.response;
    var thankYouPageView;
    var thankYouPageMessage;

    // Declaring these outside the if block to avoid scope confusion.
    var mbox;
    var config;

    var closeAll;
    var localSocialSharingView;
    if (!view) {
      // TODO: error handling??
      return;
    }

    thankYouPageView = view.getFeatureView('thankYouPage');
    thankYouPageMessage = postMsgPack['contentSubmitted_' + ContentType.noun(view.model.get('contentType'))]();
    thankYouPageView.model.set('message', thankYouPageMessage);

    thankYouPageView.afterClose = function () {
      response.Author = User.getAuthor();
      view.previewSubmission(response);
    };

    thankYouPageView.afterHide = function () {
      var submissionView;
      // If GRS was opened with paramert `bvpreventClose=true` all unneccesary
      // views should be removed, after successful submission. See CCS-32755.
      if (self.isGenericSubmission && !self.closeAllPostSubmission) {
        submissionView = view.getFeatureView('submission');
        viewCleanup(submissionView);
        viewCleanup(thankYouPageView);
      }
      // we want to remove the layer explicitly to prevent infinitive loop
      // in focus manager and browser crash as a consequence. See CCS-33928.
      FocusableView.deregisterFocusableLayer();
    };

    // In nearly all cases, we want the X on the "thank you" message to close
    // the entire box, which is why this defaults to `true`. Rarely, we'll
    // want the X to go to the previous layer, so we'll check the submission
    // view just to be sure. (Usually this option won't be present.)
    closeAll = true;
    if (view && ('closeAllPostSubmission' in view)) {
      closeAll = view.closeAllPostSubmission;
    }

    if (thankYouPageView) {
      mbox = ModestBox.get('lightbox');
      mbox.once('afterClose', thankYouPageView.afterClose);

      config = _.extend({}, lightboxOptions, {
        view: thankYouPageView,
        breadcrumbs: this.breadcrumbs,
        titleIcon: thankYouPageView.model.get('icon'),
        closeAll: closeAll,

        // We need to focus the thank you container so the message is read.
        afterShow: function () {
          // Must be deferred or screen readers won't pick it up.
          // Must be 100+ ms because of IE8.
          var _self = this;

          setTimeout(function () {
            var $thankYouContainer;
            var injectionId = '#' + _self.box.injectionId;
            var focusables = [
              injectionId + ' .bv-mbox-close.bv-focusable',
              injectionId + ' .bv-mbox-current .bv-focusable'
            ].join(', ');

            FocusableView.registerFocusableLayer($(document), focusables);

            $thankYouContainer = $('.bv-submission-message-container');

            FocusableView.moveFocus($thankYouContainer);
          }, 300);
        },

        afterHide: function () {
          thankYouPageView.afterHide();
        }
      });

      mbox.replaceOrOpen(config);

      // If the BVLocal Social Sharing feature is enabled, pass along the review content to its model.
      if (thankYouPageView.hasFeature('localSocialSharing')) {
        localSocialSharingView = view.getFeatureView('localSocialSharing');
        localSocialSharingView.model.set('reviewContent', response);
      }
    }

    FormMemory.forget();
  }

  // Show this if RPC failed to load, or if another error occurs. `message`
  // parameter is optional and will default to the generic "Something went
  // wrong" message.
  function cannotSubmitPage (opts) {
    var view = opts.view;
    var message = opts.message || postMsgPack.postSubmission_unknownError();
    var isRecoverable = !!opts.isRecoverable;

    var sb = ModestBox.get(view.ModestBoxId);
    var offScreenMsgPack = postMsgPack[isRecoverable ? 'postSubmission_errorOffScreenText' : 'postSubmission_unrecoverableErrorOffScreenText'];
    var messageView = new SubmissionSubviews.SubmissionMessageView({
      componentId: view.componentId,
      message: message,
      offScreenText: offScreenMsgPack(),
      classList: ['unknown-error'],
      icon: '&#x2718;'
    });

    var config = _.extend({}, lightboxOptions, {
      view: messageView,
      afterShow: function () {
        var $target = $('.bv-submission-message-container');
        // If we try to move focus right away, it'll get clobbered by another
        // afterShow handler that just moves focus to the box.
        setTimeout(function () {
          FocusableView.moveFocus($target);
        }, 0);
      },

      // When we return to the submission form, it won't automatically move
      // focus back to itself. We have to do it manually.
      afterHide: function (layer) {
        var layers = layer.box.layers;
        var newLayer = _(layers).last();
        var $target;

        if (layers.length > 0) {
          if (newLayer === layer && layers.length > 1) {
            newLayer = layers[layers.length - 2];
          }

          // If we try to move focus right away, odds are the previous layer's
          // focusable layer won't have become active yet.
          $target = newLayer.$target.find('.bv-focusable');
          setTimeout(function () {
            FocusableView.moveFocus($target);
          }, 500);
        }
      }
    });

    sb[isRecoverable ? 'pushOrOpen' : 'replaceOrOpen'](config);
  }

  // Content already submitted, so show this error.
  function duplicatePage (model) {
    var sb = ModestBox.get('lightbox');
    var view = new SubmissionSubviews.SubmissionMessageView({
      componentId: model.get('componentId'),
      message: postMsgPack.duplicateContent(),
      offScreenText: postMsgPack.postSubmission_unrecoverableErrorOffScreenText(),
      classList: ['duplicate'],
      icon: '&#x2718;'
    });
    var config = _.extend({}, lightboxOptions, {
      view: view,
      closeUrl: model.closeUrl || null,
      duplicatePage: true
    });
    sb.pushOrOpen(config);

    BVTracker.pageview({
      type: 'Product',
      label: 'Lightbox',
      value: 'AlreadySubmitted',
      context: 'Write',
      productId: ProductInfo.getId(this)
    });
  }

  // submission schema didn't load - can't show the submission form, so show this error
  function submissionUnavailablePage (model, error) {
    var unavailablePage;
    var sb;
    var config;
    if (error === 'duplicate') {
      return duplicatePage(model);
    }

    unavailablePage = new SubmissionSubviews.SubmissionMessageView({
      componentId: model.get('componentId'),
      message: postMsgPack.unavailableSubmission(),
      offScreenText: postMsgPack.postSubmission_errorOffScreenText(),
      classList: ['unavailable'],
      icon: '&#x2718;'
    });

    if (_(model.get('clientAPIConfig').onShow).isFunction()) {
      model.get('clientAPIConfig').onShow(unavailablePage);
    }
    else {
      sb = ModestBox.get('lightbox');
      config = _.extend({}, lightboxOptions, {
        view: unavailablePage,
        closeUrl: model.closeUrl || null,
        submissionUnavailablePage: true
      });
      sb.pushOrOpen(config);
    }

    BVTracker.pageview({
      type: 'Product',
      label: 'Lightbox',
      value: 'Unavailable',
      context: 'Write',
      productId: ProductInfo.getId(this)
    });
  }

  function createContentItemView (componentId, modelOpts) {
    var component = ENV.get('componentManager').find(componentId);
    var contentItemType = ContentType.noun(component.contentType);

    var contentItemModel = new ContentItemModel(
      _.extend({
        component: component,
        name: 'dummy'
      }, modelOpts)
    );

    var contentItemView = new ContentItemView({
      model: contentItemModel,
      config: contentItemModel,
      classList: ['content-top-' + contentItemType],
      tag: 'div',

      // Pass an empty array to views to remove all subviews.
      // This fixes a scenario when using questionContentList1 as the
      // component generates errors about the contentSort view.
      views: []
    });

    return contentItemView;
  }

  function viewCleanup (view) {
    if (view) {
      view.undelegateEvents();
      view.$el.remove();
      view.remove();
    }
  }

  // load the page with the submission form.
  function submissionPage (model, config) {
    var subject = model.toJSON().subject || {};
    var submissionComponent = ENV.get('componentManager').find(model.get('componentId'));
    var closeAllPostSubmission;
    var submissionView;
    var questionView;
    var reviewView;
    var keepOn;
    var onShow;
    var mb;
    var contentType;
    var ariaTitle;
    var goBackOnClose;
    var originalHistoryIndex;
    var sidebar;
    var $container;
    var formSetup;
    var views;
    var subjectName;
    var mbConfig;

    // TODO: We need to figure out how to handle error.
    if (!submissionComponent) {
      return;
    }

    // Should the X on the post-submission view close the whole box? Defaults
    // to true.
    closeAllPostSubmission = ('closeAllPostSubmission' in config) ? config.closeAllPostSubmission : true;

    // Assuming there's only one submission at a time... may need to refactor
    // this when we support more.
    submissionView = new submissionViewMappings.submission.view({
      model: model,
      contentType: submissionComponent.contentType,
      componentId: submissionComponent.componentId,
      parent: {
        name: submissionComponent.type,
        containerId: (config && config.containerId) ? config.containerId : submissionComponent.container
      },
      inline: (config && config.inline) || (submissionComponent.inline && $('#' + submissionComponent.container).length),
      classList: [subject.ImageUrl ? 'submission-image' : 'submission-noimage'],
      isGenericSubmission: !!config.isGenericSubmission,
      closeAllPostSubmission: closeAllPostSubmission
    });

    submissionView.on('showthankyoupage', thankYouPage, config);
    submissionView.on('showcannotsubmitpage', cannotSubmitPage);

    if (!submissionView.rpc) {
      submissionView.setupRPC();
    }

    // When the answer submission form loads in a container page, we want to
    // show the question above the form. A ContentItem view is created
    // for the question and gets inserted in the list of views in ModestBox.
    // This work was done for UIA-5715.
    //
    // In a PDP, we show the question above the answer form in a different
    // flow. There has been a conversation on how to unify the two flows that
    // creates a question above the answer form in PR #5111. We'll
    // need to have a deeper discussion on how to do it.
    // Remove ENV.isContainer() condition to show question text on PDP
    // when submission form was invoked by $BV.ui("qa", "submit_answer")
    // method. See CCS-31967.
    if (submissionComponent.contentType === 'Answers') {
      questionView = createContentItemView('questionContentList1', model.get('subjectData'));
      // Set post submission return url for APO (CCS-32204).
      subject.Url = model.closeUrl || '';
    }
    // Show review text above comment form, if form is opened in lighbox. See CCS-32332.
    if (submissionComponent.contentType === 'Comments' && submissionView.ModestBoxId === 'lightbox') {
      reviewView = createContentItemView('reviewSummary1', model.get('subjectData'));
    }

    keepOn = true;
    onShow = model.get('clientAPIConfig').onShow;
    if (_(onShow).isFunction()) {
      keepOn = onShow(submissionView);
    }

    if (keepOn) {
      mb = ModestBox.get(submissionView.ModestBoxId);
      contentType = ContentType.noun(model.get('contentType'));

      if (msgPack['aria_header_' + contentType] && subject.Name) {
        ariaTitle = msgPack['aria_header_' + contentType]({
          productName: subject.Name
        });
      }

      goBackOnClose = BV._internal.container && !ENV.get('config').siteAuth[contentType];
      originalHistoryIndex = window.history.length - 1;

      mb.once('afterClose', function (box) {
        // We need pass this param to container.js and let it handle all redirect logic
        if (contentType === 'answer') {
          box.goBackUponClose = goBackOnClose;
          return;
        }
        // Wait 500ms in case something else triggers a close/open. If so,
        // don't redirect.

        // If we should go back on close _and_ we've got something to go back to...
        if (goBackOnClose && originalHistoryIndex > 1) {
          try {
            window.history.go(originalHistoryIndex - window.history.length);
          }
          catch (e) {
            window.location.href = config.returnUrl || 'about:blank';
          }
        }
        else if (!box.opened && config.returnUrl) {
          // Go to this URL after the box is closed.
          window.location.href = config.returnUrl;
        }
      });

      // Only include the sidebar if we have an image and we're not inline.
      sidebar = null;
      if (subject.ImageUrl && !submissionView.inline) {
        sidebar = new SubmissionSubviews.SidebarView({ model: model });
      }

      $container = null;
      if (submissionView.parent.containerId) {
        $container = $('#' + submissionView.parent.containerId);
      }

      // We only want to call formSetup once, on subsequent "shows" of the ModestBox no setup is required.
      formSetup = _(submissionView.formSetup).chain().once().bind(submissionView).value();
      views = [submissionView];

      // When there is a question view, we want to show it
      // above the answer submission form.
      if (questionView) {
        views.unshift(questionView);
      }
      // When there is a review view, we want to show it
      // above the comment submission form.
      if (reviewView) {
        views.unshift(reviewView);
      }

      subjectName = subject.Name || '';
      mbConfig = _.extend({}, lightboxOptions, {
        title: msgPack['header_' + contentType]({
          productNameAvailable: !!subjectName,
          productName: subjectName
        }),
        ariaTitle: ariaTitle,

        submissionPage: true,
        ariaLabeledBy: 'bv-mbox-breadcrumb-item',

        // Give the box a class that contains its content type in order to
        // make automated testing easier.
        classList: ['content-submission-' + contentType],

        views: views,
        sidebar: sidebar,
        inline: submissionView.inline,
        autoFocus: false,
        container: $container,

        closeUrl: BV._internal.container ? (subject.Url || ENV.get('config').homePageUrl) : null,

        ariaDialog: true,

        showCloseButton: (config && (typeof config.closable !== 'undefined')) ? config.closable : true,

        breadcrumbs: config.breadcrumbs,

        beforeShow: function () {
          formSetup();
          submissionView.trigger('viewready');
        },

        afterShow: function () {
          submissionView.trigger('viewshown');
        },

        afterHide: function () {
          submissionView.cleanup();
          BVTracker.feature({
            type: 'Used',
            name: 'Close',
            detail1: 'Submission',
            detail2: 'Lightbox',
            bvProduct: ProductInfo.getTypeByContentType(contentType),
            productId: config.productId,
            categoryId: ProductInfo.getCategoryId({ model: model })
          });
        }
      });

      mb.once('beforeClose', function () {
        submissionView.trigger('viewclosed');
      });

      if (config.push) {
        mb.pushOrOpen(mbConfig);
      }
      else {
        mb.replaceOrOpen(mbConfig);
      }
    }
  }

  _lightbox = _.debounce(function (model, config) {
    // Note: model may not have populated its data yet.
    // Avoid calling things like toJSON, etc. that rely on the schema being
    // loaded. If you need that, you need to make sure it's in a callback,
    // like submissionPage().

    // Setup the session RPC channel (doesn't create session cookie).
    Session.setup();

    model.off('loadsucceeded').on('loadsucceeded', function (submissionModel) {
      // Get post submission return url to pdp for APO (CCS-32204).
      var apiHolder = api.get('products', submissionModel.attributes.clientAPIConfig.productId).limitTo(1);
      apiHolder.fetch('subject').done(function _getRedirectUrl (response) {
        submissionModel.closeUrl = response.data.Results[0].Url;
        submissionPage(submissionModel, config);
      });
    });

    model.off('loadfailed').on('loadfailed', function (submissionModel, error) {
      var apiHolder = api.get('products', submissionModel.attributes.subjectId).limitTo(1);
      apiHolder.fetch('subject').done(function _getRedirectUrl (response) {
        submissionModel.closeUrl = response.data.Results[0].Url;
        submissionUnavailablePage(submissionModel, error);
      });
    });

    model.trigger('load');

  }, 300, true);

  return {
    createContentItemView: createContentItemView,
    feedback: Feedback,
    thankYouPage: thankYouPage,
    lightbox: function (model, config) {
      if (config && !config.silentMode) {
        LoadingOverlay.show();
      }
      $(function () { _lightbox(model, config); });
    }
  };
});

/**
 * @fileOverview  Module for displaying a thank you page when a user
 * visits a hosted auth email confirmation link.
 */
BV.define('bv/ugc/hostedAuthLink',[
  'ENV',
  'underscore',
  'jquery',
  'BV',
  '$BV',
  'bv/ui-core/modestbox',
  'mf!bv/c2013/messages/postSubmission',
  'bv/c2013/view/submissionMessage',
  'bv/util/user',
  'util/url',
  'window',
  'framework/util/bvtracker',
  'bv/util/domainPolice'
], function HostedAuthLink (
  ENV,
  _,
  $,
  BV,
  $BV,
  ModestBox,
  msgPack,
  SubmissionMessageView,
  User,
  url,
  window,
  BVTracker,
  domainPolice
) {
  var res;

  function getErrMessage (errCode) {
    if (errCode === 'DUPLICATE') {
      return msgPack.userAlreadyVerified;
    }
    return msgPack.postSubmission_unknownError;
  }

  function sendAnalyticsEvent () {
    var ENVConfig = ENV.get('config');

    var notificationId = (
      url.getParam(window.location.href, 'bvnotificationId') ||
      url.getBvParam(window.location.href, 'notificationId')
    );

    var messageType = (
      url.getParam(window.location.href, 'bvmessageType') ||
      url.getBvParam(window.location.href, 'messageType')
    );

    var recipientDomain = (
      url.getParam(window.location.href, 'bvrecipientDomain') ||
      url.getBvParam(window.location.href, 'recipientDomain')
    );

    var campaignId = ENV.get('appRouter').clientAPIConfig.campaignId || '';

    BVTracker.feature({
      type: 'Shown',
      name: 'Confirmation',
      bvProduct: 'RatingsAndReviews',
      notificationId: notificationId,
      messageType: messageType,
      recipientDomain: recipientDomain,
      userLocale: ENVConfig.locale,
      campaignId: campaignId
    });
  }

  res = {
    lightbox: function lightbox (success, errCode, user) {
      var components = ENV.get('componentManager');
      var component = components.find(function findComponent (comp) {
        return comp.type === 'submission';
      });

      var icon = success ? '&#x2714;' : '&#x2718;';
      var msg = success ? msgPack.userVerified : getErrMessage(errCode);
      var classList = success ? ['thankyou'] : ['unknown-error'];

      $(function somethingToDoWithTrackingUsers () {
        var view;
        var sb;

        if (success && user) {
          User.clear({ silent: true });
          User.save({ token: user });

          // Track the usertoken in the shopper profile if present.
          if (_($BV.setUser).isFunction() && domainPolice.thirdPartyCookieEnabled()) {
            $BV.setUser(user);
          }
        }

        view = new SubmissionMessageView({
          componentId: component.componentId,
          message: msg(),
          classList: classList,
          icon: icon
        });

        sb = ModestBox.get('lightbox');

        sb.once('afterClose', function onceAfterClose () {
          // Refresh the page without the auth token if we're not on a container page.
          if (!BV._internal.container) {
            window.location = url.splice(window.location.href, 'bv_authtoken');
          }
        });

        sb.open({ view: view });

        sendAnalyticsEvent();
      });
    }
  };

  return res;
});

/**
 * @file implementation of global_auth_user UI method
 */
BV.define('bv/ugc/authUser',[
  'bv/util/xdmPost',
  'bv/ugc/hostedAuthLink',
  'bv/util/loadingOverlay'
], function (xdmPost, hostedAuthLink, LoadingOverlay) {

  function authUser (clientAPIConfig) {
    var token = clientAPIConfig.authToken;

    LoadingOverlay.show();

    // Perform the API request
    xdmPost.api('authenticateuser.json', { authtoken: token }).then(
      successHandler,
      errorHandler
    );

    function successHandler (response) {
      var user = response.Authentication.User;
      hostedAuthLink.lightbox(true, null, user);
    }

    function errorHandler (error) {
      //https://developer.bazaarvoice.com/docs/read/conversations/profiles/authenticate#error-codes
      var errorTypes = {
        'ERROR_BAD_REQUEST': 'DUPLICATE'
      };
      // Determine the appropriate error message or use the default.
      var errorMessage = errorTypes[error] || error;

      // Display the error.
      hostedAuthLink.lightbox(false, errorMessage);
    }
  }

  return authUser;

});

BV.define('bv/util/unsubscribePost',[
  'ENV',
  'BV',
  'underscore',
  'jquery',
  'bv/util/withRPC',
  'bv/api',
  'util/url',
  'bv/strings',
  'framework/util/bvtracker'
], function UnsubscribePost (
  ENV,
  BV,
  _,
  $,
  withRPC,
  api,
  Url,
  bvStrings,
  BVTracker
) {

  //
  // A function that, given an unsubscribe token, will POST to the URL
  // responsible for unsubscribing a user. Returns a deferred that resolves
  // on successful responses and rejects on unsuccessful responses.
  //
  // Cribbed from xdmPost, which (sadly) assumes we're working with devAPI,
  // even in "raw" mode.
  //
  //
  // TODO: We didn't actually need to crib this from xdmPost; that approach
  // is kinda crazy and is purposefully generic enough to support the widest
  // number of cross-domain use cases. We should just define an `unsubscribe`
  // method in the provider's easyXDM setup file and then call it from here.
  //


  // We need to POST to a certain notifications URL to unsubscribe this user:
  //
  // https://<hostname>/notifications/<client>/subscriptions/
  //  subscribe?passkey=<passkey>&emailType=<emailType|PIE>&userToken=<userToken>
  //
  // Where:
  // * `hostname` is the same as the hostname for dev API;
  // * `client` is the client name;
  // * `passkey` is an environment-specific secret as described below;
  // * `emailType` is the type of email that the user got (defaults to "PIE"
  //    for backcompat); and
  // * `userToken` is the token that identifies a particular user/subscription.
  //
  // We grab the passkey from `server-config.json`. For reference, these are
  // the passkeys:
  //
  //   (dev)  CI:     862c947b681c45924eebdf280a1fb1fb
  //   (qa)   Cert:   052934be025c22306fd57def71016f86
  //   (stg)  UAT:    9c1708db332d19a971b7e53d19f3b3ca
  //   (prod) Bazaar: b8d57893b7754e2d390348dc172b7c76
  //
  function buildUrl (token, emailType) {
    var baseUrl;
    var params;
    var ENVConfig = ENV.get('config');
    var passkey = BV._options.notifications.passkey;
    var clientName = ENVConfig.clientname;
    var unsubscribeAllMessageTypes = ENVConfig.unsubscribeAllMessageTypes;

    var _emailType;

    if (unsubscribeAllMessageTypes) {
      _emailType = 'ALL';
    }
    else {
      _emailType = emailType || 'PIE';
    }

    // The Notifications API is on Mashery under a different endpoint.
    baseUrl = api._config.notificationsUrl;

    params = {
      passkey: passkey,
      userToken: token,
      emailType: _emailType,
      callback: bvStrings.rpc.postCallback
    };

    return Url.join(
      'https:' + baseUrl,
      clientName,
      'subscriptions/unsubscribe?' + Url.stringifyObject(params)
    );
  }

  function sendAnalyticsEvent () {
    var ENVConfig = ENV.get('config');

    var notificationId = (
      Url.getParam(window.location.href, 'bvnotificationId') ||
      Url.getBvParam(window.location.href, 'notificationId')
    );

    var messageType = (
      Url.getParam(window.location.href, 'bvmessageType') ||
      Url.getBvParam(window.location.href, 'messageType')
    );

    var recipientDomain = (
      Url.getParam(window.location.href, 'bvrecipientDomain') ||
      Url.getBvParam(window.location.href, 'recipientDomain')
    );

    var campaignId = ENV.get('appRouter').clientAPIConfig.campaignId || '';

    BVTracker.feature({
      type: 'Shown',
      name: 'Unsubscribe',
      bvProduct: 'RatingsAndReviews',
      notificationId: notificationId,
      messageType: messageType,
      recipientDomain: recipientDomain,
      userLocale: ENVConfig.locale,
      campaignId: campaignId
    });
  }

  function createForm (action, rpcChannel) {
    var $form = $(
      '<form action="' +
      Url.caboose(action) +
      '" target="bv-submission-target-' +
      _.escape(rpcChannel) +
      '" method="POST" />'
    );

    $form.appendTo('body');
    return $form;
  }

  function cleanup (rpc, $form) {
    try {
      rpc.destroy();
      $form.remove();
    }
    catch (err) {}
  }

  function unsubscribePost (token, emailType) {
    var url;
    var rpc;
    var dfd = $.Deferred();
    var rpcReady = $.Deferred();
    var $form;

    sendAnalyticsEvent();

    url = buildUrl(token, emailType);

    rpc = withRPC(rpcReady, function withRPCCallback (response) {
      cleanup(rpc, $form);

      if (response) {
        dfd.resolve(response);
      }
      else {
        // TODO: We may never actually hit this. Investigate.
        dfd.reject('APIERROR');
      }
    });

    rpcReady.then(function rpcReadyThen () {
      $form = createForm(url, rpc.channel);
      $form[0].submit();
    }, function rpcReadyFail () {
      // If we couldn't set up RPC, clean up the channel and fail early.
      cleanup(rpc, $form);
      dfd.reject('RPCERROR');
    }
  );

    return dfd.promise();
  }

  return unsubscribePost;
});

BV.define('mf!bv/c2013/messages/unsubscribe',['vendor/messageformat', 'framework/util/bvtrackerqueue'], function (MessageFormat, BVTrackerQueue) { 
  return {
"userUnsubscribed" : function (x) { try { return (function(d){
var r = "";
r += "You have successfully unsubscribed from these emails.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `userUnsubscribed`: ' + e.toString() ) ] ); return ""; } },"unsubscribe_unknownError" : function (x) { try { return (function(d){
var r = "";
r += "Something went wrong. Please try again later.";
return r;
})(x||{}); } catch(e){ BVTrackerQueue.push([ 'error', new Error( 'MF error on `unsubscribe_unknownError`: ' + e.toString() ) ] ); return ""; } }
};
});

/* START_TEMPLATE */
BV.define('hbs!unsubscribeMessage',['hbs','vendor/handlebars/runtime', 'template/helpers/view'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <hgroup class=\"bv-submission-message\"> <h1 class=\"bv-submission-icon\" aria-hidden=\"true\">";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1> <h2 id=\"bv-mbox-label-text\" class=\"bv-submission-text bv-focusable\" tabindex=\"-1\">";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2> </hgroup> ";
  return buffer;
  }

  options = {hash:{
    'tag': ("div"),
    'classList': ("submission submission-message-container")
  },inverse:self.noop,fn:self.program(1, program1, data)};
  stack2 = ((stack1 = helpers.view),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "view", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('unsubscribeMessage', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
BV.define('bv/c2013/view/unsubscribeMessage',[
  'ENV',
  'framework/bmodel',
  'framework/bview',
  'hbs!unsubscribeMessage'
], function (ENV, BModel, BView, template) {
  return BView.extend({
    name: 'UnsubscribeMessage',

    template: template,

    init: function (config) {
      var component = this.getComponent();

      this.model = new BModel({
        name: 'UnsubscribeMessage',
        message: config.message,
        icon: config.icon,
        componentId: this.componentId,
        component: component,
        contentType: component.contentType
      });
    }
  });
});

BV.define('bv/ugc/unsubscribeView',[
  'ENV',
  'underscore',
  'jquery',
  'bv/ui-core/modestbox',
  'mf!bv/c2013/messages/unsubscribe',
  'bv/c2013/view/unsubscribeMessage',
  'bv/util/user',
  'util/url',
  'window'
], function (ENV, _, $, ModestBox, msgPack, UnsubscribeMessageView, User, url, window) {

  function getMessage (success, errCode) {
    if (success) {
      return msgPack.userUnsubscribed;
    }

    // TODO: We might want to return different messages for different errors.
    return msgPack.unsubscribe_unknownError;
  }

  function showLightbox (success, errCode) {
    // We piggy-back off of SubmissionMessageView, which behaves as though it
    // belongs to the submission component. So we'll do the same.
    //
    // TODO: Is there a better approach?
    var components = ENV.get('componentManager');
    var component = components.find(function (comp) {
      return comp.type === 'submission';
    });

    // TODO: Is there a better way to do this?
    var icon = success ? '&#x2714;' : '&#x2718;';

    var msg = getMessage(success, errCode);
    var classList = success ? ['thankyou'] : ['unknown-error'];

    function show () {
      if (success) {
        // TODO: Do we need to set any user information here?
      }

      var view = new UnsubscribeMessageView({
        icon: icon,
        message: msg(),
        classList: classList,
        componentId: component.componentId
      });

      ModestBox.get('lightbox').open({
        view: view,
        // Hide the close button, since closing would just show a blank page.
        showCloseButton: false
      });
    }

    $(show);
  }

  var res = {
    success: function () {
      showLightbox(true);
    },

    failure: function (errCode) {
      showLightbox(false, errCode);
    }
  };

  return res;

});

BV.define('bv/ugc/unsubscribeUser',[
  'ENV',
  'BV',
  'jquery',
  'underscore',
  'util/url',
  'bv/api',
  'bv/util/unsubscribePost',
  'bv/ugc/unsubscribeView',
  'bv/util/loadingOverlay',
  'bv/strings',
  'framework/util/bvtracker'
], function (ENV, BV, $, _, Url, api, unsubscribePost, unsubscribeView, LoadingOverlay, str, BVTracker) {

  //
  // Unsubscribes a user from emails. Reads in a token from the config, kicks
  // off the request, then hooks up the success/failure states to the view.
  //

  function unsubscribeUser (clientAPIConfig) {
    var token = clientAPIConfig.unsubscribeToken;
    var emailType = clientAPIConfig.emailType;
    LoadingOverlay.show();

    _unsubscribeUser(token, emailType).then(
      function (response) {
        unsubscribeView.success();
      },
      function (err) {
        unsubscribeView.failure(err);
      }
    );
  }

  // TODO: Perhaps move timeout logic to the `unsubscribePost` file.
  function startTimeout (dfd, token) {
    function afterWait () {
      if (dfd.state() !== 'resolved') {
        BVTracker.error({
          name: str.errors.TIMEOUT,
          detail1: 'Unsubscribe',
          detail2: 'Token: ' + token
        });
        dfd.reject('timeout');
      }
    }

    return _.delay(afterWait, 10000);
  }

  function _unsubscribeUser (token, emailType) {
    var dfd = $.Deferred();
    var timeout = startTimeout(dfd, token);

    unsubscribePost(token, emailType).then(
      function (response) {
        clearTimeout(timeout);
        dfd.resolve(response);
      },
      function (err) {
        dfd.reject(err);
      }
    );

    return dfd.promise();
  }

  return unsubscribeUser;

});

/**
 *  @fileOverview A function that, given a container page URL and pieces of
 *  the current page's URL, merges them correctly and returns a URL that we
 *  can redirect to.
 */
BV.define('bv/ugc/submit/urlForClientContainer',[
  'util/url'
], function (url) {

  function urlForClientContainer (containerPageUrl, locationSearch, locationHash) {
    // We need to handle the rare case where a container page URL includes a URL fragment.
    var containerPageUrlHash = url.hash(containerPageUrl);
    var containerPageBaseUrl = url.withoutHash(containerPageUrl);

    if (containerPageUrlHash) {
      // Move the terminal ? or & from the URL fragment to the base URL.
      containerPageUrlHash = containerPageUrlHash.replace(/(?:\?|&)$/, '');
    }

    var baseEndsInToken = (/(?:\?|&)$/).exec(containerPageBaseUrl);
    if (!baseEndsInToken) {
      containerPageBaseUrl += containerPageBaseUrl.indexOf('?') > -1 ? '&' : '?';
    }

    // Move this page's URL params onto the container page URL.
    var target = containerPageBaseUrl + locationSearch.substr(1);

    // If the target PDP has a URL fragment, that wins out. Otherwise add
    // our own fragment, if it exists.
    target += (containerPageUrlHash.length > 0) ? containerPageUrlHash : locationHash;

    return target;
  }

  return urlForClientContainer;
});
/* eslint-disable camelcase, no-unused-vars */
/* global console:false */
BV.define('bv/ugc/container',[
  'ENV',
  'jquery',
  'underscore',
  'util/url',
  'window',
  'body',
  'framework/util/bvtracker',
  'BV',
  'bv/api',
  'bv/util/urlstate',
  'bv/util/domainPolice',
  'bv/util/session',
  'bv/util/normalizeParams',
  'bv/util/loadingOverlay',
  'bv/ui-core/modestbox',
  'bv/ugc/submit/urlForClientContainer',
  'bv/strings'
],
function (
  ENV,
  $,
  _,
  url,
  window,
  body,
  BVTracker,
  BV,
  api,
  UrlState,
  DomainPolice,
  Session,
  normalizeParams,
  LoadingOverlay,
  ModestBox,
  urlForClientContainer,
  str
) {

  var locationPath = window.location.pathname.toLowerCase();
  var baseName = basename(locationPath);
  var container;
  var prrBaseNames = {
    'askquestion.htm': questionURL,
    // 'answerquestion.htm' : answerURL,
    // 'writecomment.htm' : 1,
    // 'writestory.htm' : 1,
    'submission.htm': reviewURL,
    'writereview.htm': reviewURL
  };

  // Some actions will need to use a Q&A specific container id `BVQAContainer`
  // instead of the default `BVContainer`
  var qaActions = {
    qa_submit_question: true,
    qa_submit_answer: true
  };

  function basename (path) {
    return path.replace(/.*\//, '');
  }

  // handles submission.htm or writereview.htm URLs
  function reviewURL () {
    var idMatch = locationPath.match('(/bvstaging)?/[^/]+/([^/]+)/[^/]+.htm');
    var subjectId = idMatch ? decodeURIComponent(idMatch[2]) : undefined;
    return {
      config: { productId: subjectId },
      action: 'rr_submit_review'
    };
  }

  function reportError (type, message) {
    var error = new Error(message);
    BVTracker.error({
      name: str.errors[type],
      detail1: message
    });
    // Add a class name to the body, mainly to help the functional test.
    $(body()).addClass('bv-container-error');
    if (window.console && console.error) {
      console.error('BV: Error: ', message);
    }
  }

  // Add logic to all lightboxes.
  function handleClosedModestBox () {
    var originalHistoryIndex = window.history.length - 1;
    function listenForRedirect (box) {
      var closeUrl = box.closeUrl || ENV.get('config').homePageUrl;
      // Wait for 500ms in case something else triggers a close/open. If
      // so, don't redirect.
      _.delay(function () {
        if (document.referrer !== '' && box.goBackUponClose && originalHistoryIndex > 1) {
          // We should check if we have where to go back in the browser's history when the box is
          // closed.
          try {
            window.history.go(originalHistoryIndex - window.history.length);
          }
          catch (e) {
            // If we can't go back, try to go to the specified URL.
            window.location.href = closeUrl || 'about:blank';
          }
        }
        else if (!box.opened && closeUrl) {
          // We should go to a certain URL when the box is closed.
          window.location.href = closeUrl;
        }
      }, 500);
    }

    ModestBox.get('lightbox')
      .on('afterClose', listenForRedirect)
      .on('changeTitle', function (obj, topTitle, breadcrumbTitles) {
        document.title = topTitle;
      });
  }

  // handles askquestion.htm
  function questionURL () {
    var idMatch = locationPath.match('(/bvstaging)?/answers/[^/]+/([^/]+)/([^/]+)/askquestion.htm');
    var subjectType = idMatch ? decodeURIComponent(idMatch[2]) : undefined;
    var subjectId = idMatch ? decodeURIComponent(idMatch[3]) : undefined;
    var result = {
      config: { subjectType: subjectType },
      action: 'qa_submit_question'
    };
    result.config[subjectType + 'Id'] = subjectId;
    return result;
  }

  function handlePRRUrls (containerClientAPIConfig) {
    var uiCall = prrBaseNames[baseName]();
    uiCall.config.campaignId = UrlState.get('campaignid') || '';
    $BV.ui('', uiCall.action, _.extend({}, containerClientAPIConfig, uiCall.config));
  }

  // Handles:
  //    container.htm?bvaction=rr_submit_review&bvproductId=test1&bvcampaignId=email1
  //    container.htm?bvdata=action%3Drr_submit_review%26productId%3Dtest1%26campaignId%3Demail1
  // Careful! Casing could matter!
  function handleNewUrls (containerClientAPIConfig) {
    var params = UrlState.bvParams('bv');
    var action = params.action || containerClientAPIConfig.action;
    var clientAPIConfig = _.extend({}, containerClientAPIConfig, normalizeParams(params));
    var containerPageUrl = url.caboose(clientAPIConfig.containerPageUrl);
    var redirectUrl;
    delete clientAPIConfig.action;

    // If client API config gave us a valid container page URL, use it;
    // otherwise look up the configured container page URL.
    if (!containerPageUrl || !DomainPolice.allowedDomain(containerPageUrl)) {
      containerPageUrl = ENV.get('config').container.url;
    }

    if (qaActions[action]) {
      clientAPIConfig.containerId = 'BVQAContainer';
    }

    // If this is BV hosted and we have a client specified container, redirect there.
    // Note: We guarantee container URL ends with ? or & in translate.js.
    if (clientAPIConfig.hosted && containerPageUrl) {
      redirectUrl = urlForClientContainer(containerPageUrl, window.location.search, window.location.hash);
      window.location.replace(redirectUrl);
      return;
    }

    if (action) {
      $BV.ui('', action, clientAPIConfig);
    }
    else {
      reportError(
        'IMPLEMENTATION',
        "The 'bvaction' parameter is not present in the URL, so we can't determine which action to take. Please ensure that URL parameters exist and were not stripped by an HTTP redirect."
      );
    }
  }

  function handleAuthUrl (authToken) {
    // If this is BV hosted and we have a client specified container, redirect there.
    var clientContainer = ENV.get('config').container;
    var containerUrl = clientContainer.url;
    var currentUrl = url.origin + window.location.pathname;
    // The bvnotificationId check was added to correct redirect from email confirmation url. See CCS-12183.
    if (containerUrl && DomainPolice.allowedDomain(containerUrl) && (containerUrl.indexOf(currentUrl) === -1) && (window.location.href.indexOf('bvnotificationId') === -1)) {
      window.location.replace(containerUrl + window.location.search.substr(1) + window.location.hash);
      return;
    }

    $BV.ui('global', 'auth_user', { authToken: authToken });
  }

  function handleUnsubscribeUrl (token, emailType) {
    // We don't need to redirect to a PDP; we always use the container page.
    $BV.ui('global', 'unsubscribe_user', { unsubscribeToken: token, emailType: emailType });
  }


  container = {
    init: function (clientAPIConfig) {
      var oldContainerId = clientAPIConfig.containerId;
      // Handle special bv_authtoken parameter.
      var authToken = UrlState.get('bv_authtoken');
      var unsubscribeToken = UrlState.get('bv_unsubtoken');
      var siteAuthToken = clientAPIConfig.userToken || UrlState.get('userToken', 'bv');
      var lang = ENV.get('config').locale.substring(0, 2);
      clientAPIConfig.containerId = 'BVContainer';
      $('html').attr('lang', lang);

      if (UrlState.get('mobile', 'bv') || navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry)/)) {
        BV._internal.mobile = true;
        $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">');
      }

      $(function () {
        var eventId;
        var emailType;
        $(body())
          // Wipe out the body to ensure we're on a blank container. Place some divs on the page in case we need to load an inline form.
          .html('<div id="BVContainer" role="main"><div class="bv-inline-form-container bv-cleanslate bv-cv2-cleanslate"/></div>')
          .addClass('bv-standalone-container');
        LoadingOverlay.show();

        // Hook into all lightboxes so that we can manage what happens after they close.
        handleClosedModestBox();

        eventId = UrlState.get('eventid', 'bv');
        if (eventId && !siteAuthToken) {
          // Authentication has failed.  Clear event data and redirect client to original page.
          Session.get(eventId, function (eventData) {
            var newUrl;
            if (eventData) {
              newUrl = eventData.returnUrl;
              Session.remove(eventId);
              window.location.replace(newUrl);
              return;
            }
          });
        }

        // If there's an auth token, that takes priority over everything else.
        if (authToken) {
          handleAuthUrl(authToken);
          return;
        }

        // Likewise if there's an unsubscribe token.
        if (unsubscribeToken) {
          emailType = UrlState.get('emailtype');
          handleUnsubscribeUrl(unsubscribeToken, emailType);
          return;
        }

        if (siteAuthToken) {
          // restore the old containerId since this is site auth
          clientAPIConfig.containerId = oldContainerId;
          if (eventId) {
            Session.get(eventId, function (eventData) {
              var myClientAPIConfig;
              var hashParams;
              var newUrl;
              if (eventData) {
                myClientAPIConfig = _.extend({}, clientAPIConfig, eventData);
                Session.remove(eventId);

                if (BV._internal.mobile) {
                  handleNewUrls(myClientAPIConfig);
                }
                else {

                  hashParams = {
                    action: myClientAPIConfig.action,
                    campaignId: myClientAPIConfig.campaignId,
                    userToken: siteAuthToken
                  };
                  // Send along any IDs
                  _(myClientAPIConfig).forEach(function (value, key) {
                    if (key.match(/Id$/) && myClientAPIConfig[key]) {
                      hashParams[key] = myClientAPIConfig[key];
                    }
                  });

                  // If the returnUrl is a container, don't rely on the URL route, just add to the URL parameters
                  if (eventData.isContainer) {
                    newUrl = eventData.returnUrl + '&bvuserToken=' + siteAuthToken;
                  }
                  else {
                    // We used to do this as a URL hash, but those aren't
                    // guaranteed to survive 301 redirects in browsers, and we
                    // should treat the URL hash as hands-off anyway.
                    newUrl = url.caboose(eventData.returnUrl) + 'bvdata=' +
                      encodeURIComponent(url.stringifyObject(hashParams)) + url.hash(eventData.returnUrl);
                  }

                  window.location.replace(newUrl);
                }
              }
            });
            return;
          }
        }


        // If this is a container that is BV hosted and matches PRR-style submission links, handle those.
        if (clientAPIConfig.hosted && prrBaseNames[baseName]) {
          handlePRRUrls(clientAPIConfig);
        }
        // If not, this is a container being accessed with a new-style URL.
        else {
          handleNewUrls(clientAPIConfig);
        }

      });

    }
  };

  return container;
});

/* START_TEMPLATE */
BV.define('hbs!deeplink',['hbs','vendor/handlebars/runtime'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"bv-deeplink\"> <span id=\"bv-mbox-label-text\" class=\"bv-off-screen\">";
  if (stack1 = helpers.offscreenText) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.offscreenText; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> <div class=\"bv-compat\"> <ol></ol> <div></div> </div> </div> ";
  return buffer;
  });
Handlebars.registerPartial('deeplink', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
/**
 * @fileOverview Module for displaying content via a "deep link", e.g.
 * a link to a specific content item.
 */
BV.define('bv/ugc/deeplink',[
  'ENV',
  'framework/bview',
  'underscore',
  'bv/ui-core/modestbox',
  'jquery',
  'mf!bv/c2013/messages/common',
  'hbs!deeplink',
  'util/url',
  'framework/util/bvtracker'
], function DeepLink (
  ENV,
  BView,
  _,
  ModestBox,
  $,
  msgPack,
  tmplDeeplink,
  Url,
  BVTracker
) {
  var res;

  function sendAnalyticsEvent () {
    var ENVConfig = ENV.get('config');

    var notificationId = (
      Url.getParam(window.location.href, 'bvnotificationId') ||
      Url.getBvParam(window.location.href, 'notificationId')
    );

    var messageType = (
      Url.getParam(window.location.href, 'bvmessageType') ||
      Url.getBvParam(window.location.href, 'messageType')
    );

    var recipientDomain = (
      Url.getParam(window.location.href, 'bvrecipientDomain') ||
      Url.getBvParam(window.location.href, 'recipientDomain')
    );

    var campaignId = ENV.get('appRouter').clientAPIConfig.campaignId || '';

    BVTracker.feature({
      type: 'Shown',
      name: 'DeepLink',
      bvProduct: 'RatingsAndReviews',
      notificationId: notificationId,
      messageType: messageType,
      recipientDomain: recipientDomain,
      userLocale: ENVConfig.locale,
      campaignId: campaignId
    });
  }

  res = {
    lightbox: function lightbox (contentView) {
      $(function wrappingTheFunctionInAnIIFEForSomeReason () {

        var box = ModestBox.get('lightbox');

        // The lightbox might already be open. We should close it before we
        // re-open it with our new content.
        if (box.opened) {
          box.close();
        }

        box.open({
          view: contentView,
          beforeShow: function beforeShow (layer) {
            // This is ugly, but it's better to do this here than in
            // ModestBox.
            var $layerList = layer.box.$layerList;

            var offscreenText = msgPack.deeplinkModalTitle();
            var $container = $(tmplDeeplink({ offscreenText: offscreenText }));

            // Append this container to the element that contains a box's
            // layers, then insert the layer's own view container within. We
            // don't need to call `setElement` because the same element is
            // still acting as `$el` for the layer's views, and because
            // they're handling their own events.
            $layerList.append($container);
            layer.$target.appendTo($container.find('ol'));

            _(this.views).invoke('formSetup');
          },

          afterShow: function afterShow () {
            sendAnalyticsEvent();
          }
        });
      });
    }
  };

  return res;
});

/**
 * @fileOverview An extension for the contentItemCollection view.
 *
 * A mixin for some additional contentItemCollection api requests.
 */
BV.define('bv/c2013/_extensions/collection/contentItemCollectionExt',[
  'underscore',
  'bv/api/fetch',
  'ENV'
],
function (_, api, ENV) {
  var requestLimit = 50;

  return {
    /**
     * Search content based on keywords from the dev api.
     *
     * @param keyword : the keyward that the search request is based on
     * @param page : The page number requested
     * @param clientAPIConfig : The client api configuration
     * @param subject : the subject that the request is based on
     * @param coverageTypes : the content types that search request covers
     */
    searchContentExt: function (keyword, page, clientAPIConfig, subject, coverageTypes) {
      if (_(keyword).isObject()) {
        keyword = this._normalizeSubmissionResponse(keyword).Title || '';
      }

      var self = this;
      var pageSize = ENV.get('config').page.size;
      var pageSize2n = ENV.get('config').page.size2n;

      self.subjectId = subject.Id;

      // for each covered type, create an api request
      var searchRequests = _(coverageTypes).map(function (coverType) {
        var searchRequest = api.get(api.nouns(coverType))
                .include(['Authors', 'Products'])
                .withStatsOn(self.getStatsTypes())
                .limit(requestLimit)
                .searchFor(keyword);

        // special case to include answers for questions.
        if (api.Nouns(coverType) === 'Questions') {
          searchRequest = searchRequest.include(['Answers']);
        }

        if (!_(subject).isUndefined() && !_(subject.Id).isUndefined()) {
          if (api.nouns(subject.Type) === api.nouns(coverType)) {
            searchRequest = searchRequest.filterBy('id', subject.Id);
          }
          else {
            searchRequest = searchRequest.forProduct(subject.Id);
          }
        }
        return searchRequest;
      });

      var result = {
        Results: [],
        TotalResults: 0
      };
      // search the content
      var batchContent = api.get('batch', null, searchRequests);
      try {
        batchContent.fetch('search').done(function (dataArray) {
          var resultList = [];
          var total = 0;

          _(coverageTypes).forEach(function (coverType) {
            var contentData = _(dataArray).find(function (d) {
              return d.contentType === api.nouns(coverType);
            });

            var list = contentData.data.Results;
            resultList = Array.prototype.concat(resultList, list);
            total = total + contentData.data.TotalResults;
          });

          // TODO: API doesn't return them with a score (show how good the match is)
          // we just sort the results by submission time.
          // in the future, we want API return a score to allow us sort the results by.
          resultList = _(resultList).sortBy(function (item) {
            return (-1) * new Date(item.SubmissionTime);
          });

          result = {
            Results: resultList,
            TotalResults: total
          };

          self.trigger('newresulttotal', result.TotalResults);
          // "searchresponse" shall trigger contentSearch to display the results.
          self.getTopModel().trigger('searchresponse', result, keyword);
        });
      }
      catch (e) {
        self.trigger('newresulttotal', result.TotalResults);
        // "searchresponse" shall trigger contentSearch to display the results.
        self.getTopModel().trigger('searchresponse', result, keyword);
      }
    },

    /**
     * Request "relatedQuestions" after Review/Answer submission.
     *
     * @param submission : the submission content that the related questions request is based on
     * @param clientAPIConfig : The client api configuration
     * @param subject : the subject that the request is based on
     */
    requestRelatedExt: function (submission, page, clientAPIConfig, subject) {
      var self = this;
      self.subjectId = subject.Id;

      // for each covered type, create an api request
      var request = api.get('relatedquestions')
              .include(['Products'])
              .limit(requestLimit)
              .withUser(submission._user)
              .withContentType(submission._contentType)
              .withSubject(api.Noun(subject.Type) + 'id', subject.Id);

      var result = {
        Results: [],
        TotalResults: 0
      };

      // search the content
      try {
        request.fetch('relatedquestions').done(function (dataArray) {
          var resultArray = _(dataArray.Results).map(function (item) {
            item.contentType = 'Questions';
            item.secondaryContentType = 'Answers';
            item.subjectType = 'Products';
            item.isRelatedQuestion = true;
            return item;
          });
          result = {
            Results: resultArray,
            TotalResults: dataArray.TotalResults
          };
          // "requestresponse" shall trigger contentSearch to display the results.
          self.trigger('newresulttotal', result.TotalResults);
          self.getTopModel().trigger('requestresponse', result, null);
        });
      }
      catch (e) {
        // "requestresponse" shall trigger contentSearch to display the results.
        self.trigger('newresulttotal', result.TotalResults);
        self.getTopModel().trigger('requestresponse', result, null);
      }
    },

    fakeSubmissionSchemaExt: function (contentItem) {
      var contentType = contentItem.get('secondaryContentType');
      if (!contentType) {
        return;
      }

      var fakeFields = {
        Answers: {
          answertext: {
            enabled: true,
            schema: {
              Id: 'answertext',
              Label: null,
              Default: null,
              MaxLength: 10000,
              MinLength: 0,
              Options: [],
              Required: true,
              Type: 'TextAreaInput',
              Value: null
            }
          }
        }
      };
      contentItem.set({
        formFields: fakeFields[contentType],
        shortForm: true
      });
      contentItem.set(api.noun(contentType), true);
    },

    fetchPageFromAuthorExt: function (page, clientAPIConfig, subject) {
      var self = this;
      var requestType = api.nouns(self.contentType);
      var includeRequestTypes = {
        Reviews: 'Comments',
        Questions: 'Answers',
        Answers: 'Questions'
      };
      var config = ENV.get('config');
      var pageConfig = config.page.details[api.noun(requestType)] || config.page;
      var pageSize = pageConfig.size;
      var pageSize2n = pageConfig.size2n;

      var limit = page > 1 ? pageSize2n : pageSize;
      var offset = page > 1 ? pageSize + (pageSize2n * (page - 2)) : 0;

      // for each covered type, create an api request
      var contentRequest = api.get(requestType)
              .include(['Products', 'Authors'])
              .limit(limit)
              .offset(offset)
              .filterBy('AuthorId', subject.Id);

      var includeType = includeRequestTypes[api.Nouns(requestType)];
      if (!_(includeType).isEmpty()) {
        var secondaryPageConfig = config.page.details[api.noun(includeType)] || config.page;
        var secondaryPageSize = secondaryPageConfig.size;
        contentRequest = contentRequest.include([includeType])
                          .limitIncluded(includeType)
                          .to(secondaryPageSize);
      }

      var result = {
        Results: [],
        TotalResults: 0
      };

      // search the content
      try {
        var checksumKey = this._getChecksum();

        contentRequest.fetch('author' + requestType, checksumKey).done(function (dataArray) {
          var resultArray = dataArray.data.Results;
          result = {
            Results: resultArray,
            TotalResults: dataArray.data.TotalResults
          };
          self.reset(result.Results);
        });
      }
      catch (e) {
        self.reset(result.Results);
      }
    }

  };

});

/**
 * @fileOverview An extension for the contentItem view
 *
 * This is used for things like displaying answers in a question view's
 * secondary content list and secondary submission forms.
 */
BV.define('bv/c2013/_extensions/view/contentItemExt',[
  'ENV',
  'jquery',
  'underscore',
  'bv/ui-core/modestbox',
  'bv/util/contentType',
  'bv/util/loadingOverlay',
  'bv/util/productInfo',
  'mf!bv/c2013/messages/submission',
  'mf!bv/c2013/messages/postSubmission',
  'framework/util/bvtracker'
], function ContentItemExt (
  ENV,
  $,
  _,
  ModestBox,
  ContentType,
  LoadingOverlay,
  ProductInfo,
  submissionMsgPack,
  msgPack,
  BVTracker
) {
  return {
    /**
     * Show secondary content in the ModestBox
     * this function is called when the user clicks on a contentItem
     */
    showSecondaryContentExt: function showSecondaryContentExt (ContentItemView, bypassUIAction) {
      var cloneModel;
      var cloneView;
      var config;
      var topModel = this.getTopModel();
      var isAnswerRequestModule = this.model.get('isRelatedQuestion') || false;

      if (this.hasSubmissionView && isAnswerRequestModule) {
        return;
      }

      BVTracker.feature({
        type: 'Used',
        name: 'Click',
        detail1: 'SecondaryContentLink',
        detail2: this.model.get('AuthorId'),
        contentType: this.model.get('Type'),
        contentId: this.model.get('Id'),
        bvProduct: ProductInfo.getType(this),
        productId: ProductInfo.getId(this),
        categoryId: ProductInfo.getCategoryId(this)
      });

      this.model.set('isSearchResult', false);
      // create a new ContentItemView for the question.
      // change tag 'li' to 'div'
      // we additionally want to clone the model so we can change the images to
      // not be lazily loaded.
      cloneModel = this.model.clone();
      cloneModel.set('lazyLoad', false);

      cloneView = new ContentItemView({
        model: cloneModel,
        tag: 'div'
      });

      // Do not trigger secondary submission if the question is closed for new answers
      // or if answering questions is disabled
      // We do not have this limit on comments
      if (this._shouldShowMbWithoutSubmission(bypassUIAction)) {
        this._showModestBox([cloneView]);
        return;
      }

      this.model.set('hasSubmission', true);
      config = this._getSecondarySubmissionConfig(cloneView);

      // trigger load secondary submission. (answer)
      topModel.trigger('show' + ContentType.noun(this.secondaryContentType) + 'submission', config);
    },

    /**
     * The public method to call when we're ready to show the submission form
     *
     * @param  {Object} cloneView      ?
     * @param  {Object} submissionView The submission view to show
     * @return {Boolean}               Always false
     */
    onShow: function onShow (cloneView, submissionView) {
      var self = this;
      var viewList = [cloneView];
      var isAnswerRequestModule = this.model.get('isRelatedQuestion') || false;

      if (submissionView) {
        if (submissionView.inline) {
          viewList = [];
        }
        submissionView.classList.push('fake-inline');
        if (this.contentType === 'Answers') {
          submissionView.classList.push('content-item-avatar-offset');
          submissionView.classList.push(cloneView.hasFeature('socialAvatar') ?
            'content-item-avatar-offset-on' :
            'content-item-avatar-offset-off'
          );
        }
      }

      viewList.push(submissionView);
      self.hasSubmissionView = true;

      if (!isAnswerRequestModule) {
        self._showModestBox(viewList);
      }
      else {
        self._showAnswerRequestModule(submissionView);
      }
      return false;
    },

    _getSecondarySubmissionConfig: function _getSecondarySubmissionConfig (cloneView) {
      var self = this;
      var clientAPIConfig = this.model.get('clientAPIConfig');
      var config = _.extend(
        {},
        clientAPIConfig,
        // Change way of getting campaignId for secondary content. See CCS-31965.
        { campaignId: 'BV_' + ContentType.Noun(this.model.get('contentType')).toUpperCase() + '_DISPLAY' || clientAPIConfig.campaignId || '' }
      );
      config[ContentType.noun(this.model.get('contentType')) + 'Id'] = this.model.get('Id');
      config.contentType = config.secondaryContentType || this.model.get('secondaryContentType');
      delete config.secondaryContentType;

      config.onShow = _.bind(self.onShow, self, cloneView);

      return config;
    },

    /**
     * Generates a modest box configuration, then pushes or opens a modestbox
     * with said configuration.
     *
     * @param {List<Object>} viewList A list of views to display
     */
    _showModestBox: function _showModestBox (viewList) {
      var self = this;
      var needUser;
      var sb;
      var secondaryContentType;
      var ariaTitleType;
      var submissionMessage;
      var title;
      var ariaTitle;
      var classList;
      var config;

      // if ModestBox is already open, use "push" instead of "open"
      var submissionView = false;
      var ModestBoxId = 'lightbox';
      var ModestBoxInline = false;
      var lastView = _(viewList).last();

      var ariaLabeledBy;

      if (lastView.name === 'submission') {
        submissionView = true;
        ModestBoxId = lastView.ModestBoxId || ModestBoxId;
        ModestBoxInline = lastView.inline || ModestBoxInline;
      }

      needUser = (
        ENV.get('config').siteAuth[ContentType.noun(this.secondaryContentType)] &&
        !submissionView
      );

      sb = ModestBox.get(ModestBoxId);

      secondaryContentType = ContentType.noun(this.model.get('secondaryContentType'));

      if (sb.opened && sb.inline) {
        sb.close();
      }

      ariaTitleType = 'ariaTitle_' + secondaryContentType;
      submissionMessage = submissionMsgPack['submit_' + secondaryContentType];
      title = submissionView ? submissionMessage() : '';
      ariaTitle = msgPack[ariaTitleType] ? msgPack[ariaTitleType]() : title;
      ariaLabeledBy = submissionView ? 'bv-mbox-breadcrumb-item' : '';

      // Give the box a class that contains its content type in order to make
      // automated testing easier.
      classList = ['secondary-content', 'content-submission-' + secondaryContentType];
      if (needUser) {
        classList.push('need-user');
      }

      config = {
        title: title,
        views: viewList,
        overElement: this.$viewEl,
        container: this.$viewEl,
        classList: classList,
        contentType: secondaryContentType,
        inline: ModestBoxInline,
        autoFocus: false,
        showCloseButton: true,
        ariaTitle: ariaTitle,
        showBreadcrumb: submissionView,
        submissionPage: submissionView,
        ariaLabeledBy: ariaLabeledBy,

        beforeShow: function beforeShow () {
          _(this.views).forEach(function forEachView (view) {
            var contentItemContainer = view.$viewEl.find('.bv-content-item-avatar-offset');
            var answerThisQuestionButton = contentItemContainer.find('.bv-content-btn.bv-content-secondary-btn.bv-focusable');
            view.formSetup({ shortForm: true });

            // If contentType is Questions and there is no submissionView,
            // and there are more answers than the max number of answers
            // append a message indicating that question is closed for answers.
            if (submissionView) {
              return;
            }

            if (view.contentType !== 'Questions') {
              return;
            }

            // If answer submission is disabled then hide Answer this Question button on profile page. CCS-32275.
            if (!view.hasFeature('secondarySubmission')) {
              answerThisQuestionButton.addClass('bv-mbox-hide-answer-question-button');
            }

            if (
              view.model.get('TotalSecondaryContentCount') >=
              ENV.get('config').submission.maxAnswers
            ) {
              view.$viewEl
                .append(
                  '<div class="bv-question-closed">' +
                  self.msgpacks[0].questionCloseForAnswers() +
                  '</div>'
                );
              // hide Answer this Question button if reach limit of answers. CCS-32275.
              answerThisQuestionButton.addClass('bv-mbox-hide-answer-question-button');
            }
          });

          _(this.views).invoke('trigger', 'viewready');
        },

        afterShow: function afterShow () {
          _(this.views).invoke('trigger', 'viewshown');
        },

        afterHide: function afterHide () {
          _(this.views).each(function eachView (view) {
            if (view.cleanup) {
              view.cleanup();
            }
          });
          BVTracker.feature({
            type: 'Used',
            name: 'Close',
            detail1: 'SecondaryContent',
            detail2: 'Lightbox',
            bvProduct: ProductInfo.getType(self),
            productId: ProductInfo.getId(self),
            categoryId: ProductInfo.getCategoryId(self)
          });
        }
      };

      if (submissionView) {
        sb.once('beforeClose', function beforeClose () {
          lastView.trigger('viewclosed');
        });
      }

      sb.pushOrOpen(config);
      LoadingOverlay.hide();
    },

    _showAnswerRequestModule: function _showAnswerRequestModule (submissionView) {
      var self = this;
      var inputValue;
      var viewList;
      submissionView.model.subscribe('contentSubmitted', function contentSubmitted (content) {

        self._remove({
          view: self,
          message: msgPack.contentSubmitted_answer()
        });

      }, self);

      LoadingOverlay.hide();

      inputValue = self.$viewEl.find('.bv-secondary-submission textarea').val();
      submissionView.setElement(self.$viewEl.find('.bv-secondary-submission').empty());
      submissionView.render();

      viewList = [self, submissionView];

      _(viewList).forEach(function forEeachView (view) {
        view.formSetup();
      });

      submissionView.$viewEl.find('.bv-fieldset-inner textarea').focus().val(inputValue);
    },

    /**
     * Basically, this method lets us describe conditions in which we should
     * block the secondary submission form from appearing. Returning true means
     * the submission form _won't_ appear.
     *
     * @param {Boolean} bypassUIAction - Show secondary content before requesting submission
     * @return {Boolean} true if we _don't_ want to show the submission form,
     *                   false if we _do_ want to show the submission form.
     */
    _shouldShowMbWithoutSubmission: function _shouldShowMbWithoutSubmission (bypassUIAction) {
      var topModel = this.getTopModel();

      // We don't want to allow secondary submission for Syndicated Content.
      if (this.model.get('IsSyndicated')) {
        return true;
      }

      // If current contentType is question.
      if (this.contentType === 'Questions') {
        // If answer submission is disabled
        if (!this.hasFeature('secondarySubmission')) {
          return true;
        }

        // reach the maximum answer number
        if (this.model.get('Answers') && (
          this.model.get('Answers').TotalResults >=
          ENV.get('config').submission.maxAnswers
        )) {
          return true;
        }
      }

      // If site auth is on, we should show content first before request the submission schema.
      if (
        !this.model.get('clientAPIConfig').userToken &&
        ENV.get('config').siteAuth[ContentType.noun(this.secondaryContentType)] &&
        bypassUIAction
      ) {
        return true;
      }

      if (this.getComponent().componentId === 'contentSearch1' && (
        _(topModel.get('submissionContentTypes')).isEmpty() ||
        _(topModel.get('submissionContentTypes')).indexOf(this.secondaryContentType) === -1)
      ) {
        return true;
      }

      return false;
    }
  };
});

BV.define('bv/c2013/_extensions/model/searchContentListExt',[
  'ENV',
  'underscore',
  'bv/util/pageInfo',
  'bv/util/contentType',
  'jquery'
],
function (ENV, _, pageInfo, ContentType, $) {
  return {
    getRequestFn: function (contentType) {
      var requestFn = {
        Products: this.getContent().searchContent,
        Reviews: this.getContent().requestRelated,
        Questions: this.getContent().searchContent,
        Answers: this.getContent().requestRelated
      };
      return requestFn[ContentType.Nouns(contentType)];
    },

    getProcessFn: function (contentType) {
      var processFn = {
        Products: this.processContentSearch,
        Reviews: this.processRelatedQuestions,
        Questions: this.processContentSearch,
        Answers: this.processRelatedQuestions
      };
      return processFn[ContentType.Nouns(contentType)];
    },

    fetchPageExt: function (page) {
      var requestModule = this.get('requestModule');
      var keyword = this.get('keyword');

      if (!keyword && requestModule !== 'answerRequestModule') {
        return;
      }

      this.componentSet('currentPage', page);

      var existData = this.get('fetchResults');
      var contentData = {
        Results: existData,
        TotalResults: existData.length
      };

      this.getProcessFn(this.get('contentType')).apply(this, [contentData, keyword]);
    },

    /**
     * Process content response, and set the value accordingly
     * trigger the view to show the response in ModestBox
     * @param contentData : content returned from contentItemCollection.
     *                      { TotalResult : 20, Results : [Array] }
     * @param keyword : search keyword
     * @param prependView : The view we need to prepend to the search result view
     */
    _processContent: function (contentData, keyword) {
      var requestModule = this.get('requestModule');
      var pageSize = requestModule === 'answerRequestModule' ? ENV.get('config').submission.questionsPageSize : ENV.get('config').page.size;

      var page = this.componentGet('currentPage') || 1;
      var limit = pageSize;
      var offset = page > 1 ? pageSize * (page - 1) : 0;

      var displayContent = Array.prototype.slice.apply(contentData.Results, [offset, offset + limit]);

      var contentItems = this._createSearchDisplay(displayContent, keyword);
      var myPageInfo = this.updatePageInfo(displayContent);

      this.set('_noResults', _(contentItems).isEmpty());
      this.getContent().reset(contentItems, keyword);
      this.trigger('pageinfo', myPageInfo);
      this.dataReady(contentData);
    },

    _createSearchDisplay: function (contentItems, keyword) {
      var self = this;
      return _(contentItems).map(function (contentItem) {
        contentItem.contentType = ContentType.Nouns(contentItem.Type);
        contentItem.secondaryContentType = ContentType.Nouns(contentItem.SecondaryType);
        contentItem.subjectType = self.get('subjectType') || ContentType.Nouns(contentItem.Reference.Type);

        contentItem.isSearchResult = true;
        if (contentItem.Text) {
          var text = contentItem.Text;
          var startIndex = Math.max(text.indexOf(keyword), 0);
          var endIndex = text.length;
          var isStart = true;
          var isEnd = true;

          if (startIndex > 20) {
            startIndex = startIndex - 20;
            isStart = false;
          } else {
            startIndex = 0;
          }

          if (endIndex > startIndex + 100) {
            endIndex = startIndex + 100;
            isEnd = false;
          }

          var shortText = text.substring(startIndex, endIndex);
          var firstIndex = isStart ? 0 : Math.max(shortText.indexOf(' '), 0);
          var lastIndex = isEnd ? shortText.length : Math.min(shortText.lastIndexOf(' '), shortText.length);
          shortText = $.trim(shortText.substring(firstIndex, lastIndex));

          isStart = firstIndex === 0;

          if (!isStart) {
            shortText = '...' + shortText;
          }
          if (!isEnd) {
            shortText = shortText + '...';
          }

          contentItem.shortText = shortText;
        }
        return contentItem;
      });
    },


    /**
     * Set "TotalResults", "current", "numPages"
     * create pageInfo and trigger the UgcCount and Pagination to update
     * @param contentData : content returned from contentItemCollection.
     *                      { TotalResult : 20, Results : [Array] }
     */
    updatePageInfo: function (contentData) {
      // update the UGC count and pagination
      var pageSize = ENV.get('config').submission.questionsPageSize;
      var currentPage = this.componentGet('currentPage') || 1;
      var myPageInfo = this.get('requestModule') === 'answerRequestModule' ? pageInfo(
        undefined,
        currentPage,
        contentData.length,
        this.get('TotalResults'),
        pageSize
      ) : pageInfo(
        undefined,
        currentPage,
        contentData.length,
        this.get('TotalResults')
      );

      this.set({
        TotalResults: this.get('TotalResults'),
        numPages: myPageInfo.numPages,
        startResult: myPageInfo.start
      }, { silent: true });

      return myPageInfo;
    },

    /**
     * Tell our content collection to fetch new content from the server
     * @param type : The request type
     * @param page : The page of data to fetch
     * @param info : Either keyword or submission content
     */
    fetchContent: function (type, page, info) {
      var content = this.getContent();
      var clientAPIConfig = this.get('clientAPIConfig');
      var subject = {
        Type: this.get('subjectType'),
        Id: clientAPIConfig[ContentType.noun(this.get('subjectType')) + 'Id']
      };
      var coverageTypes = this.get('coverageContentTypes');
      var args = [info, page, clientAPIConfig, subject, coverageTypes];

      this.componentSet('currentPage', page);

      this.unsubscribe('pageto', this.fetchPage);
      this.subscribe('pageto', this.fetchPage);
      this.getRequestFn(type).apply(content, args);
    },


    /**
     * Once a related question is answered, we will close that one and open/append a new one.
     * This function is bound to the "contentCollection" remove event.
     * It also sets the current displayed question index, so that we know which question to append next time
     */
    appendRelatedQuestion: function (removedModel, collection, options) {
      var totalQuestions = this.get('fetchResults');
      var currentPage = this.componentGet('currentPage') || 1;
      var pageSize = ENV.get('config').submission.questionsPageSize;
      var deletedIndex = (currentPage - 1) * pageSize + options.index;
      var content = this.getContent();
      var currentIndex = currentPage * pageSize - 1;

      totalQuestions.splice(deletedIndex, 1);

      if (currentIndex < totalQuestions.length) {
        content.add(totalQuestions[currentIndex], options);
      }

      this.set('TotalResults', totalQuestions.length);

      var myPageInfo = this.updatePageInfo(content.models);
      this.trigger('pageinfo', myPageInfo);
    }

  };
});

BV.define('bv/c2013/_extensions/view/searchContentListExt',[
  'ENV',
  'jquery',
  'underscore',
  'bv/ui-core/modestbox',
  'bv/util/loadingOverlay',
  'bv/util/productInfo',
  'framework/util/bvtracker',
  'bv/util/focusManager'
],
function SearchContentListExt (
  ENV, $, _,
  ModestBox,
  LoadingOverlay,
  ProductInfo,
  BVTracker,
  FocusManager) {
  return {

    _focusSearchResultsBox: function _focusSearchResultsBox (isInside) {
      var self = this;

      var $firstFocusable;

      if (isInside) {
        $firstFocusable = self.$viewEl.find('.bv-secondary-content-link.bv-focusable').eq(0);
      }
      else {
        $firstFocusable = self.$viewEl.find('.button.bv-mbox-close.bv-focusable').eq(0);
      }

      if ($firstFocusable) {
        // Modestbox's autoFocus behavior no longer functions correctly.
        // To avoid having to mess with modestbox for now, we've added this
        // code to move focus for this view for now.
        // The setTimeout is necessary because other afterShow callbacks are
        // happening and we need to guarantee this happens last so that we're
        // sure the close button has rendered.
        setTimeout(function () {
          FocusManager.rescanFocusLayer();
          FocusManager.moveFocus($firstFocusable);
        }, 0);
      }
    },

    /**
     * Show "search results" in the ModestBox
     * "showContent" function listens to model's "showcontent" event.
     * @param includeSubmission : boolean, indicates if we need to trigger loadSubmission.
     * @param keyword : the search keyward, e.g. best quality
     */
    showContentSearchExt: function showContentSearchExt (includeSubmission, keyword) {
      var self = this;
      var keywords = !keyword ? '' : keyword.split(' ');
      var coverageContent = self.model.get('coverageContentTypes');
      var bvProduct = {
        Reviews: ProductInfo.RATINGSANDREVIEWS,
        Questions: ProductInfo.ASKANDANSWER
      };
      var lightboxOptions;
      var mbConfig;
      var config;
      var lastSearchQuery;
      // for some reason our view gets confused of where the rendered the html goes.
      this.$viewEl = this.viewEl = null;
      this.isSearchRender = true;

      function beforeShowCallback (layer) {
        if (layer.views) {
          // get the most recent search query from DOM and substitute keywords
          // to prevent receiving incorrent ones from scope
          lastSearchQuery = layer.$target.find('.bv-search-text').val();
          // check if answer submission is disabled, hide Answer this question button. CCS-32275.
          if (!layer.views.includeSubmission) {
            layer.$target.find('.bv-content-secondary-btn').addClass('bv-mbox-hide-answer-question-button');
          }
          if (lastSearchQuery) {
            keywords = lastSearchQuery.split(' ');
          }
          _(layer.views).invoke('formSetup', { searchFor: keywords, shortForm: true });
        }
        else {
          _(layer).invoke('formSetup', { searchFor: keywords, shortForm: true });
        }
      }

      lightboxOptions = {
        ariaDialog: true,
        ariaDescribedby: 'bv-content-list-products-wrapper',
        keyboardEnabled: false,
        classList: ['narrow', 'search'],
        container: null,
        inline: false,
        targetClass: 'bv-mbox-search-content',
        beforeShow: beforeShowCallback,
        afterShow: _.bind(self._focusSearchResultsBox, self, false)
      };

      function afterCloseCallback (layer) {
        _(layer.views).each(function (v) {
          if (v.isSearchRender) {
            v.isSearchRender = false;
            v.$el.detach();
          }
        });
        // moving focus to the search input in case review comment is opened (see CCS-33163 for clarity)
        FocusManager.moveFocus($('.bv-search-text'));

        _(coverageContent).each(function (el) {
          var bvp = bvProduct[el];
          if (!bvp) {
            return;
          }

          BVTracker.feature({
            type: 'Used',
            name: 'Close',
            detail1: 'Search',
            detail2: 'Lightbox',
            bvProduct: bvp,
            productId: ProductInfo.getId(self),
            categoryId: ProductInfo.getCategoryId(self)
          });
        });
      }

      self.mb = ModestBox.get(this.ModestBoxId);

      if (!includeSubmission) {
        // sorry, but I don't remember why I added this condition.
        // comment it out for now because it's broken the search.
        // if (self.model.getContent().size() === 0) {
        //   return;
        // }
        if (_(self.classList).indexOf('no-submission') === -1) {
          self.classList.push('no-submission');
        }
      }

      // if ModestBox is open, and we are performing "search" again inside the ModestBox
      // then do not call "open" or "replace" on the ModestBox.
      // just update the view and highlight the search keyword.
      if (self.mb.opened) {
        self.detach();
        self.render();
        self._focusSearchResultsBox(true);
        beforeShowCallback([self]);
        LoadingOverlay.hide();
        return;
      }

      // if the ModestBox needs to include "submission"
      // setup "submission" schema request success callback handler
      if (includeSubmission && (this.clientAPIConfig.userToken || !ENV.get('config').siteAuth.question)) {
        config = _.extend({}, this.clientAPIConfig, { campaignId: 'BV_PRODUCT_DISPLAY' });
        // setup callback
        config.onShow = function onShow (submissionView) {
          if (submissionView) {
            submissionView.classList.push('fake-inline');
            // replace the current ModestBox if it is open already.

            self.mb.once('afterClose', afterCloseCallback);

            mbConfig = _.extend({}, lightboxOptions, {
              views: [self, submissionView],
              beforeShow: beforeShowCallback
            });

            self.mb.replaceOrOpen(mbConfig);
          }
          return false;
        };
        // trigger loadSubmission
        this.model.publish('submission', config);
      }
      else {
        if (ENV.get('config').siteAuth.question) {
          lightboxOptions.classList.push('need-user');
        }

        self.mb.once('afterClose', afterCloseCallback);

        mbConfig = _.extend({}, lightboxOptions, {
          views: [self]
        });

        self.mb.replaceOrOpen(mbConfig);
      }
    }
  };
});

// This is the social sharing component placed on the post-submission Thank You view for BV Local Clients.
// If a client is a BV Local hub (brand), this feature is added to Firebird. It will make an API request to
// BV Local after the `submissionLoad` event, and hide itself or render based on the response.

BV.define('bv/c2013/_extensions/model/localSocialSharingExt',[
  'bv/strings',
  'framework/util/bvtracker',
  'underscore'
], function (BVStrings, BVTracker, _) {

  return {

    fetchSocialSharingConfig: function (clientApiConfig, options) {
      if (!options || options.contentType !== 'review') {
        return;
      }

      var self = this;

      this.api.get(clientApiConfig.productId)
        .fetch()
        .done(function (response) {
          if (response.socialSharingInfo) {
            // Set the `socialSharingInfo` response data on the model
            self.set('sharingConfig', response.socialSharingInfo);
          }
          else {
            // Errors on a successful API response are
            // logged in bv/api/localSocialSharing/fetch.js
            self._disable();
          }
        })
        .fail(function () {
          self._disable();

          BVTracker.error({
            name: BVStrings.errors.BV_LOCAL_API_FAILURE,
            detail1: this
          });
        });
    },

    _disable: function () {
      this.set('active', false);
    }

  };
});

/*!
* ZeroClipboard
* The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* Copyright (c) 2014 Jon Rohan, James M. Greene
* Licensed MIT
* http://zeroclipboard.org/
* v1.3.5
*/

////
//
// NOTE: This script has been modified to work within our framework. You can't simply drop in updates.
// I've made two changes on top of v1.3.5 for compatibility with Firebird:
//
// 1) The ability to configure global DOM attributes.
// I've opened a pull request for these changes to make it into 2.0, which is in beta now
// https://github.com/zeroclipboard/zeroclipboard/pull/412
//
// 2) Reconfigured the flash snippet to call `BV.require` instead of `window.require`
// This change isn't necessary with the pull request I opened against 2.0.
// For other versions, you need to change reference to `require` in the ActionScript to `BV.require` and recompile the SWF
//
// -MSN
//
////

(function(window) {
  
  var currentElement;
  var flashState = {
    bridge: null,
    version: "0.0.0",
    disabled: null,
    outdated: null,
    ready: null
  };
  var _clipData = {};
  var clientIdCounter = 0;
  var _clientMeta = {};
  var elementIdCounter = 0;
  var _elementMeta = {};
  var _amdModuleId = null;
  var _cjsModuleId = null;
  var _swfPath = function() {
    var i, jsDir, tmpJsPath, jsPath, swfPath = "ZeroClipboard.swf";
    if (document.currentScript && (jsPath = document.currentScript.src)) {} else {
      var scripts = document.getElementsByTagName("script");
      if ("readyState" in scripts[0]) {
        for (i = scripts.length; i--; ) {
          if (scripts[i].readyState === "interactive" && (jsPath = scripts[i].src)) {
            break;
          }
        }
      } else if (document.readyState === "loading") {
        jsPath = scripts[scripts.length - 1].src;
      } else {
        for (i = scripts.length; i--; ) {
          tmpJsPath = scripts[i].src;
          if (!tmpJsPath) {
            jsDir = null;
            break;
          }
          tmpJsPath = tmpJsPath.split("#")[0].split("?")[0];
          tmpJsPath = tmpJsPath.slice(0, tmpJsPath.lastIndexOf("/") + 1);
          if (jsDir == null) {
            jsDir = tmpJsPath;
          } else if (jsDir !== tmpJsPath) {
            jsDir = null;
            break;
          }
        }
        if (jsDir !== null) {
          jsPath = jsDir;
        }
      }
    }
    if (jsPath) {
      jsPath = jsPath.split("#")[0].split("?")[0];
      swfPath = jsPath.slice(0, jsPath.lastIndexOf("/") + 1) + swfPath;
    }
    return swfPath;
  }();
  var _camelizeCssPropName = function() {
    var matcherRegex = /\-([a-z])/g, replacerFn = function(match, group) {
      return group.toUpperCase();
    };
    return function(prop) {
      return prop.replace(matcherRegex, replacerFn);
    };
  }();
  var _getStyle = function(el, prop) {
    var value, camelProp, tagName, possiblePointers, i, len;
    if (window.getComputedStyle) {
      value = window.getComputedStyle(el, null).getPropertyValue(prop);
    } else {
      camelProp = _camelizeCssPropName(prop);
      if (el.currentStyle) {
        value = el.currentStyle[camelProp];
      } else {
        value = el.style[camelProp];
      }
    }
    if (prop === "cursor") {
      if (!value || value === "auto") {
        tagName = el.tagName.toLowerCase();
        if (tagName === "a") {
          return "pointer";
        }
      }
    }
    return value;
  };
  var _elementMouseOver = function(event) {
    if (!event) {
      event = window.event;
    }
    var target;
    if (this !== window) {
      target = this;
    } else if (event.target) {
      target = event.target;
    } else if (event.srcElement) {
      target = event.srcElement;
    }
    ZeroClipboard.activate(target);
  };
  var _addEventHandler = function(element, method, func) {
    if (!element || element.nodeType !== 1) {
      return;
    }
    if (element.addEventListener) {
      element.addEventListener(method, func, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + method, func);
    }
  };
  var _removeEventHandler = function(element, method, func) {
    if (!element || element.nodeType !== 1) {
      return;
    }
    if (element.removeEventListener) {
      element.removeEventListener(method, func, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + method, func);
    }
  };
  var _addClass = function(element, value) {
    if (!element || element.nodeType !== 1) {
      return element;
    }
    if (element.classList) {
      if (!element.classList.contains(value)) {
        element.classList.add(value);
      }
      return element;
    }
    if (value && typeof value === "string") {
      var classNames = (value || "").split(/\s+/);
      if (element.nodeType === 1) {
        if (!element.className) {
          element.className = value;
        } else {
          var className = " " + element.className + " ", setClass = element.className;
          for (var c = 0, cl = classNames.length; c < cl; c++) {
            if (className.indexOf(" " + classNames[c] + " ") < 0) {
              setClass += " " + classNames[c];
            }
          }
          element.className = setClass.replace(/^\s+|\s+$/g, "");
        }
      }
    }
    return element;
  };
  var _removeClass = function(element, value) {
    if (!element || element.nodeType !== 1) {
      return element;
    }
    if (element.classList) {
      if (element.classList.contains(value)) {
        element.classList.remove(value);
      }
      return element;
    }
    if (value && typeof value === "string" || value === undefined) {
      var classNames = (value || "").split(/\s+/);
      if (element.nodeType === 1 && element.className) {
        if (value) {
          var className = (" " + element.className + " ").replace(/[\n\t]/g, " ");
          for (var c = 0, cl = classNames.length; c < cl; c++) {
            className = className.replace(" " + classNames[c] + " ", " ");
          }
          element.className = className.replace(/^\s+|\s+$/g, "");
        } else {
          element.className = "";
        }
      }
    }
    return element;
  };
  var _getZoomFactor = function() {
    var rect, physicalWidth, logicalWidth, zoomFactor = 1;
    if (typeof document.body.getBoundingClientRect === "function") {
      rect = document.body.getBoundingClientRect();
      physicalWidth = rect.right - rect.left;
      logicalWidth = document.body.offsetWidth;
      zoomFactor = Math.round(physicalWidth / logicalWidth * 100) / 100;
    }
    return zoomFactor;
  };
  var _getDOMObjectPosition = function(obj, defaultZIndex) {
    var info = {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      zIndex: _getSafeZIndex(defaultZIndex) - 1
    };
    if (obj.getBoundingClientRect) {
      var rect = obj.getBoundingClientRect();
      var pageXOffset, pageYOffset, zoomFactor;
      if ("pageXOffset" in window && "pageYOffset" in window) {
        pageXOffset = window.pageXOffset;
        pageYOffset = window.pageYOffset;
      } else {
        zoomFactor = _getZoomFactor();
        pageXOffset = Math.round(document.documentElement.scrollLeft / zoomFactor);
        pageYOffset = Math.round(document.documentElement.scrollTop / zoomFactor);
      }
      var leftBorderWidth = document.documentElement.clientLeft || 0;
      var topBorderWidth = document.documentElement.clientTop || 0;
      info.left = rect.left + pageXOffset - leftBorderWidth;
      info.top = rect.top + pageYOffset - topBorderWidth;
      info.width = "width" in rect ? rect.width : rect.right - rect.left;
      info.height = "height" in rect ? rect.height : rect.bottom - rect.top;
    }
    return info;
  };
  var _cacheBust = function(path, options) {
    var cacheBust = options == null || options && options.cacheBust === true && options.useNoCache === true;
    if (cacheBust) {
      return (path.indexOf("?") === -1 ? "?" : "&") + "noCache=" + new Date().getTime();
    } else {
      return "";
    }
  };
  var _vars = function(options) {
    var i, len, domain, str = [], domains = [], trustedOriginsExpanded = [];
    if (options.trustedOrigins) {
      if (typeof options.trustedOrigins === "string") {
        domains.push(options.trustedOrigins);
      } else if (typeof options.trustedOrigins === "object" && "length" in options.trustedOrigins) {
        domains = domains.concat(options.trustedOrigins);
      }
    }
    if (options.trustedDomains) {
      if (typeof options.trustedDomains === "string") {
        domains.push(options.trustedDomains);
      } else if (typeof options.trustedDomains === "object" && "length" in options.trustedDomains) {
        domains = domains.concat(options.trustedDomains);
      }
    }
    if (domains.length) {
      for (i = 0, len = domains.length; i < len; i++) {
        if (domains.hasOwnProperty(i) && domains[i] && typeof domains[i] === "string") {
          domain = _extractDomain(domains[i]);
          if (!domain) {
            continue;
          }
          if (domain === "*") {
            trustedOriginsExpanded = [ domain ];
            break;
          }
          trustedOriginsExpanded.push.apply(trustedOriginsExpanded, [ domain, "//" + domain, window.location.protocol + "//" + domain ]);
        }
      }
    }
    if (trustedOriginsExpanded.length) {
      str.push("trustedOrigins=" + encodeURIComponent(trustedOriginsExpanded.join(",")));
    }
    if (typeof options.jsModuleId === "string" && options.jsModuleId) {
      str.push("jsModuleId=" + encodeURIComponent(options.jsModuleId));
    }
    return str.join("&");
  };
  var _inArray = function(elem, array, fromIndex) {
    if (typeof array.indexOf === "function") {
      return array.indexOf(elem, fromIndex);
    }
    var i, len = array.length;
    if (typeof fromIndex === "undefined") {
      fromIndex = 0;
    } else if (fromIndex < 0) {
      fromIndex = len + fromIndex;
    }
    for (i = fromIndex; i < len; i++) {
      if (array.hasOwnProperty(i) && array[i] === elem) {
        return i;
      }
    }
    return -1;
  };
  var _prepClip = function(elements) {
    if (typeof elements === "string") throw new TypeError("ZeroClipboard doesn't accept query strings.");
    if (!elements.length) return [ elements ];
    return elements;
  };
  var _dispatchCallback = function(func, context, args, async) {
    if (async) {
      window.setTimeout(function() {
        func.apply(context, args);
      }, 0);
    } else {
      func.apply(context, args);
    }
  };
  var _getSafeZIndex = function(val) {
    var zIndex, tmp;
    if (val) {
      if (typeof val === "number" && val > 0) {
        zIndex = val;
      } else if (typeof val === "string" && (tmp = parseInt(val, 10)) && !isNaN(tmp) && tmp > 0) {
        zIndex = tmp;
      }
    }
    if (!zIndex) {
      if (typeof _globalConfig.zIndex === "number" && _globalConfig.zIndex > 0) {
        zIndex = _globalConfig.zIndex;
      } else if (typeof _globalConfig.zIndex === "string" && (tmp = parseInt(_globalConfig.zIndex, 10)) && !isNaN(tmp) && tmp > 0) {
        zIndex = tmp;
      }
    }
    return zIndex || 0;
  };
  var _deprecationWarning = function(deprecatedApiName, debugEnabled) {
    if (deprecatedApiName && debugEnabled !== false && typeof console !== "undefined" && console && (console.warn || console.log)) {
      var deprecationWarning = "`" + deprecatedApiName + "` is deprecated. See docs for more info:\n" + "    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations";
      if (console.warn) {
        console.warn(deprecationWarning);
      } else {
        console.log(deprecationWarning);
      }
    }
  };
  var _extend = function() {
    var i, len, arg, prop, src, copy, target = arguments[0] || {};
    for (i = 1, len = arguments.length; i < len; i++) {
      if ((arg = arguments[i]) != null) {
        for (prop in arg) {
          if (arg.hasOwnProperty(prop)) {
            src = target[prop];
            copy = arg[prop];
            if (target === copy) {
              continue;
            }
            if (copy !== undefined) {
              target[prop] = copy;
            }
          }
        }
      }
    }
    return target;
  };
  var _extractDomain = function(originOrUrl) {
    if (originOrUrl == null || originOrUrl === "") {
      return null;
    }
    originOrUrl = originOrUrl.replace(/^\s+|\s+$/g, "");
    if (originOrUrl === "") {
      return null;
    }
    var protocolIndex = originOrUrl.indexOf("//");
    originOrUrl = protocolIndex === -1 ? originOrUrl : originOrUrl.slice(protocolIndex + 2);
    var pathIndex = originOrUrl.indexOf("/");
    originOrUrl = pathIndex === -1 ? originOrUrl : protocolIndex === -1 || pathIndex === 0 ? null : originOrUrl.slice(0, pathIndex);
    if (originOrUrl && originOrUrl.slice(-4).toLowerCase() === ".swf") {
      return null;
    }
    return originOrUrl || null;
  };
  var _determineScriptAccess = function() {
    var _extractAllDomains = function(origins, resultsArray) {
      var i, len, tmp;
      if (origins != null && resultsArray[0] !== "*") {
        if (typeof origins === "string") {
          origins = [ origins ];
        }
        if (typeof origins === "object" && "length" in origins) {
          for (i = 0, len = origins.length; i < len; i++) {
            if (origins.hasOwnProperty(i)) {
              tmp = _extractDomain(origins[i]);
              if (tmp) {
                if (tmp === "*") {
                  resultsArray.length = 0;
                  resultsArray.push("*");
                  break;
                }
                if (_inArray(tmp, resultsArray) === -1) {
                  resultsArray.push(tmp);
                }
              }
            }
          }
        }
      }
    };
    var _accessLevelLookup = {
      always: "always",
      samedomain: "sameDomain",
      never: "never"
    };
    return function(currentDomain, configOptions) {
      var asaLower, allowScriptAccess = configOptions.allowScriptAccess;
      if (typeof allowScriptAccess === "string" && (asaLower = allowScriptAccess.toLowerCase()) && /^always|samedomain|never$/.test(asaLower)) {
        return _accessLevelLookup[asaLower];
      }
      var swfDomain = _extractDomain(configOptions.moviePath);
      if (swfDomain === null) {
        swfDomain = currentDomain;
      }
      var trustedDomains = [];
      _extractAllDomains(configOptions.trustedOrigins, trustedDomains);
      _extractAllDomains(configOptions.trustedDomains, trustedDomains);
      var len = trustedDomains.length;
      if (len > 0) {
        if (len === 1 && trustedDomains[0] === "*") {
          return "always";
        }
        if (_inArray(currentDomain, trustedDomains) !== -1) {
          if (len === 1 && currentDomain === swfDomain) {
            return "sameDomain";
          }
          return "always";
        }
      }
      return "never";
    };
  }();
  var _objectKeys = function(obj) {
    if (obj == null) {
      return [];
    }
    if (Object.keys) {
      return Object.keys(obj);
    }
    var keys = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        keys.push(prop);
      }
    }
    return keys;
  };
  var _deleteOwnProperties = function(obj) {
    if (obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          delete obj[prop];
        }
      }
    }
    return obj;
  };
  var _safeActiveElement = function() {
    try {
      return document.activeElement;
    } catch (err) {}
    return null;
  };
  var _detectFlashSupport = function() {
    var hasFlash = false;
    if (typeof flashState.disabled === "boolean") {
      hasFlash = flashState.disabled === false;
    } else {
      if (typeof ActiveXObject === "function") {
        try {
          if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
            hasFlash = true;
          }
        } catch (error) {}
      }
      if (!hasFlash && navigator.mimeTypes["application/x-shockwave-flash"]) {
        hasFlash = true;
      }
    }
    return hasFlash;
  };
  function _parseFlashVersion(flashVersion) {
    return flashVersion.replace(/,/g, ".").replace(/[^0-9\.]/g, "");
  }
  function _isFlashVersionSupported(flashVersion) {
    return parseFloat(_parseFlashVersion(flashVersion)) >= 10;
  }
  var ZeroClipboard = function(elements, options) {
    if (!(this instanceof ZeroClipboard)) {
      return new ZeroClipboard(elements, options);
    }
    this.id = "" + clientIdCounter++;
    _clientMeta[this.id] = {
      instance: this,
      elements: [],
      handlers: {}
    };
    if (elements) {
      this.clip(elements);
    }
    if (typeof options !== "undefined") {
      _deprecationWarning("new ZeroClipboard(elements, options)", _globalConfig.debug);
      ZeroClipboard.config(options);
    }
    this.options = ZeroClipboard.config();
    if (typeof flashState.disabled !== "boolean") {
      flashState.disabled = !_detectFlashSupport();
    }
    if (flashState.disabled === false && flashState.outdated !== true) {
      if (flashState.bridge === null) {
        flashState.outdated = false;
        flashState.ready = false;
        _bridge();
      }
    }
  };
  ZeroClipboard.prototype.setText = function(newText) {
    if (newText && newText !== "") {
      _clipData["text/plain"] = newText;
      if (flashState.ready === true && flashState.bridge && typeof flashState.bridge.setText === "function") {
        flashState.bridge.setText(newText);
      } else {
        flashState.ready = false;
      }
    }
    return this;
  };
  ZeroClipboard.prototype.setSize = function(width, height) {
    if (flashState.ready === true && flashState.bridge && typeof flashState.bridge.setSize === "function") {
      flashState.bridge.setSize(width, height);
    } else {
      flashState.ready = false;
    }
    return this;
  };
  var _setHandCursor = function(enabled) {
    if (flashState.ready === true && flashState.bridge && typeof flashState.bridge.setHandCursor === "function") {
      flashState.bridge.setHandCursor(enabled);
    } else {
      flashState.ready = false;
    }
  };
  ZeroClipboard.prototype.destroy = function() {
    this.unclip();
    this.off();
    delete _clientMeta[this.id];
  };
  var _getAllClients = function() {
    var i, len, client, clients = [], clientIds = _objectKeys(_clientMeta);
    for (i = 0, len = clientIds.length; i < len; i++) {
      client = _clientMeta[clientIds[i]].instance;
      if (client && client instanceof ZeroClipboard) {
        clients.push(client);
      }
    }
    return clients;
  };
  ZeroClipboard.version = "1.3.5";
  var _globalConfig = {
    swfPath: _swfPath,
    trustedDomains: window.location.host ? [ window.location.host ] : [],
    cacheBust: true,
    forceHandCursor: false,
    zIndex: 999999999,
    debug: true,
    title: null,
    autoActivate: true,
    containerId: "global-zeroclipboard-html-bridge",
    containerClass: "global-zeroclipboard-container",
    flashBridgeName: "global-zeroclipboard-flash-bridge"
  };
  ZeroClipboard.config = function(options) {
    if (typeof options === "object" && options !== null) {
      _extend(_globalConfig, options);
    }
    if (typeof options === "string" && options) {
      if (_globalConfig.hasOwnProperty(options)) {
        return _globalConfig[options];
      }
      return;
    }
    var copy = {};
    for (var prop in _globalConfig) {
      if (_globalConfig.hasOwnProperty(prop)) {
        if (typeof _globalConfig[prop] === "object" && _globalConfig[prop] !== null) {
          if ("length" in _globalConfig[prop]) {
            copy[prop] = _globalConfig[prop].slice(0);
          } else {
            copy[prop] = _extend({}, _globalConfig[prop]);
          }
        } else {
          copy[prop] = _globalConfig[prop];
        }
      }
    }
    return copy;
  };
  ZeroClipboard.destroy = function() {
    ZeroClipboard.deactivate();
    for (var clientId in _clientMeta) {
      if (_clientMeta.hasOwnProperty(clientId) && _clientMeta[clientId]) {
        var client = _clientMeta[clientId].instance;
        if (client && typeof client.destroy === "function") {
          client.destroy();
        }
      }
    }
    var htmlBridge = _getHtmlBridge(flashState.bridge);
    if (htmlBridge && htmlBridge.parentNode) {
      htmlBridge.parentNode.removeChild(htmlBridge);
      flashState.ready = null;
      flashState.bridge = null;
    }
  };
  ZeroClipboard.activate = function(element) {
    if (currentElement) {
      _removeClass(currentElement, _globalConfig.hoverClass);
      _removeClass(currentElement, _globalConfig.activeClass);
    }
    currentElement = element;
    _addClass(element, _globalConfig.hoverClass);
    _reposition();
    var newTitle = _globalConfig.title || element.getAttribute("title");
    if (newTitle) {
      var htmlBridge = _getHtmlBridge(flashState.bridge);
      if (htmlBridge) {
        htmlBridge.setAttribute("title", newTitle);
      }
    }
    var useHandCursor = _globalConfig.forceHandCursor === true || _getStyle(element, "cursor") === "pointer";
    _setHandCursor(useHandCursor);
  };
  ZeroClipboard.deactivate = function() {
    var htmlBridge = _getHtmlBridge(flashState.bridge);
    if (htmlBridge) {
      htmlBridge.style.left = "0px";
      htmlBridge.style.top = "-9999px";
      htmlBridge.removeAttribute("title");
    }
    if (currentElement) {
      _removeClass(currentElement, _globalConfig.hoverClass);
      _removeClass(currentElement, _globalConfig.activeClass);
      currentElement = null;
    }
  };
  var _bridge = function() {
    var flashBridge, len;
    var container = document.getElementById(_globalConfig.containerId);
    if (!container) {
      var opts = ZeroClipboard.config();
      opts.jsModuleId = typeof _amdModuleId === "string" && _amdModuleId || typeof _cjsModuleId === "string" && _cjsModuleId || null;
      var allowScriptAccess = _determineScriptAccess(window.location.host, _globalConfig);
      var flashvars = _vars(opts);
      var swfUrl = _globalConfig.moviePath + _cacheBust(_globalConfig.moviePath, _globalConfig);
      var html = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + _globalConfig.flashBridgeName + '" width="100%" height="100%">         <param name="movie" value="' + swfUrl + '"/>         <param name="allowScriptAccess" value="' + allowScriptAccess + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + flashvars + '"/>         <embed src="' + swfUrl + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="' + _globalConfig.flashBridgeName + '"           allowScriptAccess="' + allowScriptAccess + '"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + flashvars + '"           scale="exactfit">         </embed>       </object>';
      container = document.createElement("div");
      container.id = _globalConfig.containerId;
      container.setAttribute("class", _globalConfig.containerClass);
      container.style.position = "absolute";
      container.style.left = "0px";
      container.style.top = "-9999px";
      container.style.width = "15px";
      container.style.height = "15px";
      container.style.zIndex = "" + _getSafeZIndex(_globalConfig.zIndex);
      document.body.appendChild(container);
      container.innerHTML = html;
    }
    flashBridge = document[_globalConfig.flashBridgeName];
    if (flashBridge && (len = flashBridge.length)) {
      flashBridge = flashBridge[len - 1];
    }
    flashState.bridge = flashBridge || container.children[0].lastElementChild;
  };
  var _getHtmlBridge = function(flashBridge) {
    var isFlashElement = /^OBJECT|EMBED$/;
    var htmlBridge = flashBridge && flashBridge.parentNode;
    while (htmlBridge && isFlashElement.test(htmlBridge.nodeName) && htmlBridge.parentNode) {
      htmlBridge = htmlBridge.parentNode;
    }
    return htmlBridge || null;
  };
  var _reposition = function() {
    if (currentElement) {
      var pos = _getDOMObjectPosition(currentElement, _globalConfig.zIndex);
      var htmlBridge = _getHtmlBridge(flashState.bridge);
      if (htmlBridge) {
        htmlBridge.style.top = pos.top + "px";
        htmlBridge.style.left = pos.left + "px";
        htmlBridge.style.width = pos.width + "px";
        htmlBridge.style.height = pos.height + "px";
        htmlBridge.style.zIndex = pos.zIndex + 1;
      }
      if (flashState.ready === true && flashState.bridge && typeof flashState.bridge.setSize === "function") {
        flashState.bridge.setSize(pos.width, pos.height);
      } else {
        flashState.ready = false;
      }
    }
    return this;
  };
  ZeroClipboard.prototype.on = function(eventName, func) {
    var i, len, events, added = {}, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (typeof eventName === "string" && eventName) {
      events = eventName.toLowerCase().split(/\s+/);
    } else if (typeof eventName === "object" && eventName && typeof func === "undefined") {
      for (i in eventName) {
        if (eventName.hasOwnProperty(i) && typeof i === "string" && i && typeof eventName[i] === "function") {
          this.on(i, eventName[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventName = events[i].replace(/^on/, "");
        added[eventName] = true;
        if (!handlers[eventName]) {
          handlers[eventName] = [];
        }
        handlers[eventName].push(func);
      }
      if (added.noflash && flashState.disabled) {
        _receiveEvent.call(this, "noflash", {});
      }
      if (added.wrongflash && flashState.outdated) {
        _receiveEvent.call(this, "wrongflash", {
          flashVersion: flashState.version
        });
      }
      if (added.load && flashState.ready) {
        _receiveEvent.call(this, "load", {
          flashVersion: flashState.version
        });
      }
    }
    return this;
  };
  ZeroClipboard.prototype.off = function(eventName, func) {
    var i, len, foundIndex, events, perEventHandlers, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (arguments.length === 0) {
      events = _objectKeys(handlers);
    } else if (typeof eventName === "string" && eventName) {
      events = eventName.split(/\s+/);
    } else if (typeof eventName === "object" && eventName && typeof func === "undefined") {
      for (i in eventName) {
        if (eventName.hasOwnProperty(i) && typeof i === "string" && i && typeof eventName[i] === "function") {
          this.off(i, eventName[i]);
        }
      }
    }
    if (events && events.length) {
      for (i = 0, len = events.length; i < len; i++) {
        eventName = events[i].toLowerCase().replace(/^on/, "");
        perEventHandlers = handlers[eventName];
        if (perEventHandlers && perEventHandlers.length) {
          if (func) {
            foundIndex = _inArray(func, perEventHandlers);
            while (foundIndex !== -1) {
              perEventHandlers.splice(foundIndex, 1);
              foundIndex = _inArray(func, perEventHandlers, foundIndex);
            }
          } else {
            handlers[eventName].length = 0;
          }
        }
      }
    }
    return this;
  };
  ZeroClipboard.prototype.handlers = function(eventName) {
    var prop, copy = null, handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
    if (handlers) {
      if (typeof eventName === "string" && eventName) {
        return handlers[eventName] ? handlers[eventName].slice(0) : null;
      }
      copy = {};
      for (prop in handlers) {
        if (handlers.hasOwnProperty(prop) && handlers[prop]) {
          copy[prop] = handlers[prop].slice(0);
        }
      }
    }
    return copy;
  };
  var _dispatchClientCallbacks = function(eventName, context, args, async) {
    var handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers[eventName];
    if (handlers && handlers.length) {
      var i, len, func, originalContext = context || this;
      for (i = 0, len = handlers.length; i < len; i++) {
        func = handlers[i];
        context = originalContext;
        if (typeof func === "string" && typeof window[func] === "function") {
          func = window[func];
        }
        if (typeof func === "object" && func && typeof func.handleEvent === "function") {
          context = func;
          func = func.handleEvent;
        }
        if (typeof func === "function") {
          _dispatchCallback(func, context, args, async);
        }
      }
    }
    return this;
  };
  ZeroClipboard.prototype.clip = function(elements) {
    elements = _prepClip(elements);
    for (var i = 0; i < elements.length; i++) {
      if (elements.hasOwnProperty(i) && elements[i] && elements[i].nodeType === 1) {
        if (!elements[i].zcClippingId) {
          elements[i].zcClippingId = "zcClippingId_" + elementIdCounter++;
          _elementMeta[elements[i].zcClippingId] = [ this.id ];
          if (_globalConfig.autoActivate === true) {
            _addEventHandler(elements[i], "mouseover", _elementMouseOver);
          }
        } else if (_inArray(this.id, _elementMeta[elements[i].zcClippingId]) === -1) {
          _elementMeta[elements[i].zcClippingId].push(this.id);
        }
        var clippedElements = _clientMeta[this.id].elements;
        if (_inArray(elements[i], clippedElements) === -1) {
          clippedElements.push(elements[i]);
        }
      }
    }
    return this;
  };
  ZeroClipboard.prototype.unclip = function(elements) {
    var meta = _clientMeta[this.id];
    if (meta) {
      var clippedElements = meta.elements;
      var arrayIndex;
      if (typeof elements === "undefined") {
        elements = clippedElements.slice(0);
      } else {
        elements = _prepClip(elements);
      }
      for (var i = elements.length; i--; ) {
        if (elements.hasOwnProperty(i) && elements[i] && elements[i].nodeType === 1) {
          arrayIndex = 0;
          while ((arrayIndex = _inArray(elements[i], clippedElements, arrayIndex)) !== -1) {
            clippedElements.splice(arrayIndex, 1);
          }
          var clientIds = _elementMeta[elements[i].zcClippingId];
          if (clientIds) {
            arrayIndex = 0;
            while ((arrayIndex = _inArray(this.id, clientIds, arrayIndex)) !== -1) {
              clientIds.splice(arrayIndex, 1);
            }
            if (clientIds.length === 0) {
              if (_globalConfig.autoActivate === true) {
                _removeEventHandler(elements[i], "mouseover", _elementMouseOver);
              }
              delete elements[i].zcClippingId;
            }
          }
        }
      }
    }
    return this;
  };
  ZeroClipboard.prototype.elements = function() {
    var meta = _clientMeta[this.id];
    return meta && meta.elements ? meta.elements.slice(0) : [];
  };
  var _getAllClientsClippedToElement = function(element) {
    var elementMetaId, clientIds, i, len, client, clients = [];
    if (element && element.nodeType === 1 && (elementMetaId = element.zcClippingId) && _elementMeta.hasOwnProperty(elementMetaId)) {
      clientIds = _elementMeta[elementMetaId];
      if (clientIds && clientIds.length) {
        for (i = 0, len = clientIds.length; i < len; i++) {
          client = _clientMeta[clientIds[i]].instance;
          if (client && client instanceof ZeroClipboard) {
            clients.push(client);
          }
        }
      }
    }
    return clients;
  };
  _globalConfig.hoverClass = "zeroclipboard-is-hover";
  _globalConfig.activeClass = "zeroclipboard-is-active";
  _globalConfig.trustedOrigins = null;
  _globalConfig.allowScriptAccess = null;
  _globalConfig.useNoCache = true;
  _globalConfig.moviePath = "ZeroClipboard.swf";
  ZeroClipboard.detectFlashSupport = function() {
    _deprecationWarning("ZeroClipboard.detectFlashSupport", _globalConfig.debug);
    return _detectFlashSupport();
  };
  ZeroClipboard.dispatch = function(eventName, args) {
    if (typeof eventName === "string" && eventName) {
      var cleanEventName = eventName.toLowerCase().replace(/^on/, "");
      if (cleanEventName) {
        var clients = currentElement && _globalConfig.autoActivate === true ? _getAllClientsClippedToElement(currentElement) : _getAllClients();
        for (var i = 0, len = clients.length; i < len; i++) {
          _receiveEvent.call(clients[i], cleanEventName, args);
        }
      }
    }
  };
  ZeroClipboard.prototype.setHandCursor = function(enabled) {
    _deprecationWarning("ZeroClipboard.prototype.setHandCursor", _globalConfig.debug);
    enabled = typeof enabled === "boolean" ? enabled : !!enabled;
    _setHandCursor(enabled);
    _globalConfig.forceHandCursor = enabled;
    return this;
  };
  ZeroClipboard.prototype.reposition = function() {
    _deprecationWarning("ZeroClipboard.prototype.reposition", _globalConfig.debug);
    return _reposition();
  };
  ZeroClipboard.prototype.receiveEvent = function(eventName, args) {
    _deprecationWarning("ZeroClipboard.prototype.receiveEvent", _globalConfig.debug);
    if (typeof eventName === "string" && eventName) {
      var cleanEventName = eventName.toLowerCase().replace(/^on/, "");
      if (cleanEventName) {
        _receiveEvent.call(this, cleanEventName, args);
      }
    }
  };
  ZeroClipboard.prototype.setCurrent = function(element) {
    _deprecationWarning("ZeroClipboard.prototype.setCurrent", _globalConfig.debug);
    ZeroClipboard.activate(element);
    return this;
  };
  ZeroClipboard.prototype.resetBridge = function() {
    _deprecationWarning("ZeroClipboard.prototype.resetBridge", _globalConfig.debug);
    ZeroClipboard.deactivate();
    return this;
  };
  ZeroClipboard.prototype.setTitle = function(newTitle) {
    _deprecationWarning("ZeroClipboard.prototype.setTitle", _globalConfig.debug);
    newTitle = newTitle || _globalConfig.title || currentElement && currentElement.getAttribute("title");
    if (newTitle) {
      var htmlBridge = _getHtmlBridge(flashState.bridge);
      if (htmlBridge) {
        htmlBridge.setAttribute("title", newTitle);
      }
    }
    return this;
  };
  ZeroClipboard.setDefaults = function(options) {
    _deprecationWarning("ZeroClipboard.setDefaults", _globalConfig.debug);
    ZeroClipboard.config(options);
  };
  ZeroClipboard.prototype.addEventListener = function(eventName, func) {
    _deprecationWarning("ZeroClipboard.prototype.addEventListener", _globalConfig.debug);
    return this.on(eventName, func);
  };
  ZeroClipboard.prototype.removeEventListener = function(eventName, func) {
    _deprecationWarning("ZeroClipboard.prototype.removeEventListener", _globalConfig.debug);
    return this.off(eventName, func);
  };
  ZeroClipboard.prototype.ready = function() {
    _deprecationWarning("ZeroClipboard.prototype.ready", _globalConfig.debug);
    return flashState.ready === true;
  };
  var _receiveEvent = function(eventName, args) {
    eventName = eventName.toLowerCase().replace(/^on/, "");
    var cleanVersion = args && args.flashVersion && _parseFlashVersion(args.flashVersion) || null;
    var element = currentElement;
    var performCallbackAsync = true;
    switch (eventName) {
     case "load":
      if (cleanVersion) {
        if (!_isFlashVersionSupported(cleanVersion)) {
          _receiveEvent.call(this, "onWrongFlash", {
            flashVersion: cleanVersion
          });
          return;
        }
        flashState.outdated = false;
        flashState.ready = true;
        flashState.version = cleanVersion;
      }
      break;

     case "wrongflash":
      if (cleanVersion && !_isFlashVersionSupported(cleanVersion)) {
        flashState.outdated = true;
        flashState.ready = false;
        flashState.version = cleanVersion;
      }
      break;

     case "mouseover":
      _addClass(element, _globalConfig.hoverClass);
      break;

     case "mouseout":
      if (_globalConfig.autoActivate === true) {
        ZeroClipboard.deactivate();
      }
      break;

     case "mousedown":
      _addClass(element, _globalConfig.activeClass);
      break;

     case "mouseup":
      _removeClass(element, _globalConfig.activeClass);
      break;

     case "datarequested":
      if (element) {
        var targetId = element.getAttribute("data-clipboard-target"), targetEl = !targetId ? null : document.getElementById(targetId);
        if (targetEl) {
          var textContent = targetEl.value || targetEl.textContent || targetEl.innerText;
          if (textContent) {
            this.setText(textContent);
          }
        } else {
          var defaultText = element.getAttribute("data-clipboard-text");
          if (defaultText) {
            this.setText(defaultText);
          }
        }
      }
      performCallbackAsync = false;
      break;

     case "complete":
      _deleteOwnProperties(_clipData);
      if (element && element !== _safeActiveElement() && element.focus) {
        element.focus();
      }
      break;
    }
    var context = element;
    var eventArgs = [ this, args ];
    return _dispatchClientCallbacks.call(this, eventName, context, eventArgs, performCallbackAsync);
  };
  if (typeof BV.define === 'function' && BV.define.amd) {
    BV.define('vendor/BVZeroClipboard',[ "require", "exports", "module" ], function(require, exports, module) {
      _amdModuleId = module && module.id || null;
      return ZeroClipboard;
    });
  } else if (typeof module === "object" && module && typeof module.exports === "object" && module.exports && typeof window.require === "function") {
    _cjsModuleId = module.id || null;
    module.exports = ZeroClipboard;
  } else {
    window.ZeroClipboard = ZeroClipboard;
  }
})(function() {
  return this;
}());

BV.define('bv/c2013/_extensions/view/localSocialSharingExt',[
  'ENV',
  'framework/bview',
  'framework/util/bvtracker',
  'bv/util/productInfo',
  'jquery',
  'underscore',
  'vendor/json2',
  'vendor/BVZeroClipboard'
], function (ENV, BView, BVTracker, ProductInfo, $, _, JSON, ZeroClipboard) {

  // localSocialSharingExt:
  // BV Local Social Sharing view functionality.
  //
  // This is returned in `secondary` and extends the View defined in
  // /static/dev/scripts/bv/c2013/view/localSocialSharing.js
  //

  // Track the link click and redirect to the third party url.
  // Note: This feature was originally designed to open the link in a popup, but IE's popup blocker made that unfeasable.
  var openSocialSharingLink = function () {
    var sharingUrl = this.model.get('sharingConfig').link;

    BVTracker.feature({
      type: 'Used',
      name: 'BV Local Social Sharing',
      detail1: 'Clicked',
      detail2: sharingUrl,
      bvProduct: ProductInfo.getType(this),
      productId: ProductInfo.getId(this),
      interaction: true,
      categoryId: ProductInfo.getCategoryId(this)
    });

    window.location.href = sharingUrl;
  };

  // This callback is executed if ZeroClipboard detects a browser without flash.
  // Display a different set of copy when flash is disabled.
  var nonFlashFallback = function () {
    ZeroClipboard.destroy();
    this.model.set('nonFlash', true);

    // Swap values once the sharingConfig object is set
    this.listenToOnce(this.model, 'change:sharingConfig', function (model, sharingConfig) {
      var nonFlashCopy = sharingConfig.flashDisabledValues;

      // One final fallback -- if there is no flash disabled copy and we are going down this path, remove the widget.
      if (!nonFlashCopy) {
        model._disable();
        return;
      }

      // Go through each property in the nonFlashCopy object and overwrite values in sharingConfig
      _.each(nonFlashCopy, function (value, key) {
        sharingConfig[key] = value;
      });

      // Silently set the modified sharingConfig object back onto the model
      model.set('sharingConfig', sharingConfig, { silent: true });
    });
  };

  return {
    _init: function () {
      var ENVconfig = ENV.get('config');

      ZeroClipboard.config({
        debug: ENVconfig.workspace !== 'production',
        zIndex: 2000008031,
        moviePath: ENVconfig.utilPath + 'zeroclipboard/1.3.5/BVZeroClipboard.swf',
        swfPath: ENVconfig.utilPath + 'zeroclipboard/1.3.5/BVZeroClipboard.swf',
        allowScriptAccess: 'always',
        containerId: 'bv-zeroclipboard-html-bridge',
        containerClass: 'bv-zeroclipboard-container',
        flashBridgeName: 'bv-zeroclipboard-flash-bridge'
      });

      // Check for flash
      var clip = new ZeroClipboard();
      clip.on('noflash wrongflash', _.bind(nonFlashFallback, this));
      this.model.set('clip', clip);

      // Call `_display` as data comes in, once per change to
      // `reviewContent`, `sharingConfig`, and `active`
      this.listenToOnce(this.model, 'change:reviewContent', this._display);
      this.listenToOnce(this.model, 'change:sharingConfig', this._display);
      this.listenToOnce(this.model, 'change:active', this._display);
    },

    // Opt out of BView's `render` and `renderAsync` methods
    render: $.noop,
    renderAsync: $.noop,

    // Controls rendering. We need two pieces of data to render this feature view: `reviewContent` and `sharingConfig`.
    // Only render when both are present, and there has not been a failure.
    _display: function () {
      if (!this.model.get('active')) {
        this._remove();
      }

      else if (this.model.get('reviewContent') && this.model.get('sharingConfig')) {
        this._renderComponent();
      }
    },

    // Actually render the widget and initialize ZeroClipboard
    _renderComponent: _.once(function () {
      BView.prototype.render.apply(this, arguments);

      this._initZeroClipboard();

      // Select the preview content
      var that = this;
      _.delay(function () {
        that.$el.find('#bv-response-preview').select();
      }, 500);

      BVTracker.feature({
        type: 'Used',
        name: 'BV Local Social Sharing',
        detail1: 'Rendered',
        detail2: JSON.stringify(this.model.get('sharingConfig')),
        bvProduct: ProductInfo.getType(this),
        productId: ProductInfo.getId(this),
        categoryId: ProductInfo.getCategoryId(this)
      });
    }),

    _initZeroClipboard: function () {
      var $button = this.$el.find('.bv-local-social-sharing-button');
      var clickHandler = _.bind(openSocialSharingLink, this);

      // If we're in a nonFlash state, setup the click handler for the button, but don't go any further
      if (this.model.get('nonFlash')) {
        $button.on('click', clickHandler);

        return;
      }

      // If ZC has already been initialized, destroy it
      if (this.model.has('clip')) {
        this.model.get('clip').destroy();
        this.model.unset('clip');
      }

      // Create a new ZeroClipboard instance
      var clip = new ZeroClipboard($button);
      // The 'complete' event fires after text has been copied.
      clip.on('complete', clickHandler);
      this.model.set('clip', clip);
    },

    // Destroy the Zero Clipboard instance, remove the Flash bridge from the DOM and deregister the JS client's event listeners.
    // Not using `BView.remove` or `BView.detach` because either would affect the parent `thankYouPage` view as well.
    _remove: function () {
      this.model.unset('clip');
      ZeroClipboard.destroy();

      // Remove the view's content element
      if (this.$viewEl) {
        this.$viewEl.remove();
        this.$viewEl = this.viewEl = null;
      }
    }

  };
});

/* START_TEMPLATE */
BV.define('hbs!activeContentFilters',['hbs','vendor/handlebars/runtime', 'template/helpers/view', 'template/helpers/extmsg', 'template/helpers/renderIcon'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " <div class=\"bv-active-filters-list-title\">";
  options = {hash:{
    'prefix': ("content_filter_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "list_title", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "list_title", depth0.msgpack, depth0, options)))
    + "</div> <ul class=\"bv-active-filters-list\"> ";
  stack2 = helpers.each.call(depth0, depth0.filters, {hash:{},inverse:self.noop,fn:self.programWithDepth(program2, data, depth0)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <li class=\"bv-active-filters-list-item\"> <button type=\"button\" class=\"bv-active-filter-button-clear bv-focusable\"> <span aria-hidden=\"true\">";
  options = {hash:{
    'prefix': ("content_filter_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "button_clear", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "button_clear", depth0.msgpack, depth0, options)))
    + "</span> ";
  options = {hash:{
    'classList': ("bv-close-icon"),
    'ariaHidden': ("true")
  },inverse:self.noop,fn:self.program(4, program4, data)};
  stack2 = ((stack1 = helpers.renderIcon),stack1 ? stack1.call(depth0, "bv-sprite-close", options) : helperMissing.call(depth0, "renderIcon", "bv-sprite-close", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <span class=\"bv-off-screen\">";
  options = {hash:{
    'prefix': ("offscreen_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "clear_all_filters", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "clear_all_filters", depth0.msgpack, depth0, options)))
    + "</span> </button> </li> </ul> ";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers.each.call(depth0, depth0.options, {hash:{},inverse:self.noop,fn:self.programWithDepth(program3, data, depth0, depth1)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " <li data-bv-filter-headerid=\""
    + escapeExpression(((stack1 = depth1.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-active-filters-list-item\"> <button type=\"button\" data-bv-filter-option=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"bv-active-filter-button bv-focusable\" title=\""
    + escapeExpression(((stack1 = depth1.label),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> ";
  if (stack2 = helpers.label) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.label; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " ";
  options = {hash:{
    'classList': ("bv-close-icon"),
    'ariaHidden': ("true")
  },inverse:self.noop,fn:self.program(4, program4, data)};
  stack2 = ((stack1 = helpers.renderIcon),stack1 ? stack1.call(depth0, "bv-sprite-close", options) : helperMissing.call(depth0, "renderIcon", "bv-sprite-close", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <span class=\"bv-off-screen\">";
  options = {hash:{
    'prefix': ("offscreen_")
  }};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "remove_filter", depth2.msgpack, depth2, options) : helperMissing.call(depth0, "extmsg", "remove_filter", depth2.msgpack, depth2, options)))
    + "</span> </button> </li> ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " &#x2718; ";
  }

  options = {hash:{
    'tag': ("div"),
    'classList': ("active-filters hidden")
  },inverse:self.noop,fn:self.program(1, program1, data)};
  stack2 = ((stack1 = helpers.view),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "view", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('activeContentFilters', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
BV.define('bv/c2013/view/contentFilterActiveFilters',[
  'framework/bview',
  'framework/util/bvtracker',
  'bv/util/focusManager',
  'bv/util/productInfo',
  'jquery',
  'underscore',
  'hbs!activeContentFilters',
  'mf!bv/c2013/messages/contentFilter'
],
function (
  BView,
  BVTracker,
  focusManager,
  ProductInfo,
  $,
  _,
  tmplActiveFilters,
  msgPack
) {

  // ActiveFiltersView:
  // Shows the list of currently-active filters. Hidden when no filters are
  // active.
  //
  var ActiveFiltersView = BView.extend({
    name: 'ActiveFilters',

    template: tmplActiveFilters,

    events: {
      'click button[data-bv-filter-option]': 'clearOption',
      'click button.bv-active-filter-button-clear': 'clearAllFilters'
    },

    msgpacks: [msgPack],

    init: function () {
      _(this.model.filters).each(function (filter) {
        this.listenTo(filter, {
          filterOptionChanged: this.filterOptionChanged
        });
      }, this);

      this.listenTo(this.model, {
        filterEnabledChanged: this.filterOptionChanged,
        allFiltersCleared: this._checkVisibility
      });
    },

    filterOptionChanged: function () {
      this._checkVisibility();
    },

    attach: function () {
      BView.prototype.attach.apply(this, arguments);
      this._checkVisibility();
    },

    clearOption: function (event) {
      var $button = $(event.target).closest('[data-bv-filter-option]');
      var optionId = $button.data('bv-filter-option');
      var optionStr = (parseInt(optionId, 10) > 1) ? optionId + 'Stars' : optionId + 'Star';

      var $filterEl = $button.closest('[data-bv-filter-headerid]');
      var filterId = $filterEl.data('bv-filter-headerid');

      var filter = this.model.getFilter(filterId);
      var option = filter.getOption(optionId);

      option.set('enabled', false);
      // Set focus to next activited filter or back to filter select button.
      if (this.$viewEl.hasClass('bv-hidden')) {
        focusManager.focusPrev();
      }
      else {
        focusManager.focusNext();
      }

      BVTracker.feature({
        type: 'Used',
        name: 'Filter',
        detail1: 'Clear' + optionStr,
        bvProduct: ProductInfo.getType(this),
        productId: ProductInfo.getId(this),
        categoryId: ProductInfo.getCategoryId(this)
      });
    },

    clearAllFilters: function () {
      this.model.clearAllFilters();

      focusManager.focusPrev();

      BVTracker.feature({
        type: 'Used',
        name: 'Filter',
        detail1: 'ClearAll',
        bvProduct: ProductInfo.getType(this),
        productId: ProductInfo.getId(this),
        categoryId: ProductInfo.getCategoryId(this)
      });
    },

    _checkVisibility: function () {
      var shouldBeHidden;

      if (this.isBeforeAttach()) { return; }
      // If we're about to show the active filters, we should first go
      // through the filter list and make sure the right ones are visible.
      //
      // If we're about to hide the active filters, we don't need to bother
      // with that chore; we'll do it when we get toggled back to visible.
      shouldBeHidden = this.model.activeFilters.length === 0;

      if (!shouldBeHidden) {
        this._checkFilterVisibility();
      }
      this.$viewEl.toggleClass('bv-hidden', shouldBeHidden);
      return !shouldBeHidden;
    },

    _checkFilterVisibility: function () {
      // Go through each filter view, hide the views of the inactive filters,
      // and show the views of the active filters.
      _(this.model.filters).each(function (filter) {
        var $filterEl = this._getViewForFilter(filter);

        _(filter.options).each(function (option) {
          var $optionEl = this._getViewForOption(option, $filterEl);
          var optionShouldBeVisible = option.get('enabled');
          // toggling bv-hidden class on the parent element instead of the button,
          // to comply with ARIA issue (see CCS-34273)
          $optionEl.parent().toggleClass('bv-hidden', !optionShouldBeVisible);
        }, this);

      }, this);
    },

    // Looks up the DOM element for a given filter model.
    _getViewForFilter: function (filter) {
      return this.$('[data-bv-filter-headerid="' + filter.id + '"]');
    },

    // Looks up the DOM element for a given filter option model.
    _getViewForOption: function (option, $filterEl) {
      return $filterEl.find('[data-bv-filter-option="' + option.id + '"]');
    },

    // TODO: Generalize this? Figure out a different check?
    isBeforeAttach: function () {
      return !this.$viewEl || !this.$viewEl.length;
    }
  });

  return ActiveFiltersView;
});

/* START_TEMPLATE */
BV.define('hbs!contentFilterDropdown',['hbs','vendor/handlebars/runtime', 'template/helpers/view'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <!--[if lt IE 7]> <div class=\"bv-compat bvie6 bvie-lt8 bvie\"> <![endif]--> <!--[if IE 7]> <div class=\"bv-compat bvie7 bvie-lt8 bvie\"> <![endif]--> <!--[if IE 8]> <div class=\"bv-compat bvie8 bvie\"> <![endif]--> <!--[if IE 9]> <div class=\"bv-compat bvie9 bvie\"> <![endif]--> <!--[if gt IE 9]> <!--><div class=\"bv-compat\"> <!--<![endif]--> <div class=\"bv-dropdown bv-filter-dropdown\"> <ul id=\"bv-content-filter-dropdown-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" role=\"menu\"> ";
  stack1 = helpers.each.call(depth0, depth0.options, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " </ul> </div> </div> ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <li class=\"bv-dropdown-item bv-focusable ";
  stack1 = helpers['if'].call(depth0, depth0.enabled, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-bv-dropdown-value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"0\" role=\"menuitem\"> <span>";
  if (stack1 = helpers.label) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> </li> ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "bv-dropdown-item-selected";
  }

  buffer += "<div class=\"bv-core-container-";
  if (stack1 = helpers.version) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.version; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> ";
  options = {hash:{
    'tag': ("div"),
    'classList': ("select-dropdown")
  },inverse:self.noop,fn:self.program(1, program1, data)};
  stack2 = ((stack1 = helpers.view),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "view", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </div> ";
  return buffer;
  });
Handlebars.registerPartial('contentFilterDropdown', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
BV.define('bv/c2013/view/contentFilterDropdown',[
  'underscore',
  'jquery',
  'bv/ui-core/bselectdropdownview',
  'bv/util/focusManager',
  'hbs!contentFilterDropdown'
], function (_, $, BSelectDropdownView, focusManager, tmplDropdown) {
  // FilterDropdownView:
  // A drop-down menu displaying options for a particular filter.
  return BSelectDropdownView.extend({
    name: 'FilterDropdown',

    template: tmplDropdown,

    options: _(BSelectDropdownView.prototype.options).extend({
      allowToggle: true
    }),

    moveNextFocusable: false,

    init: function () {
      // NOOP
    },

    topPositionModifier: function (pos) {
      return pos - 5;
    },

    rightPositionModifier: function (pos) {
      return pos + parseInt(this.parent.$viewEl.find('.bv-dropdown-target').css('paddingRight'), 10);
    },

    select: function (e) {
      BSelectDropdownView.prototype.select.apply(this, arguments);

      var $elem = $(e.target).closest('.bv-dropdown-item');
      // TODO: toggle might be too brittle. Look for bugs.
      $elem.toggleClass('bv-dropdown-item-selected');
    },

    setupKeyboardNavigation: function () {
      BSelectDropdownView.prototype.setupKeyboardNavigation.apply(this, arguments);

      var self = this;
      var keysToHandle = {
        9: true,  // Tab
        38: true, // Up arrow
        40: true  // Down arrow
      };

      self.$el.off('keydown.FilterSelectView').on('keydown.FilterSelectView', function (e) {
        var keyCode = e.keyCode;

        if (!keysToHandle[keyCode]) { return; }

        var stopEvent = false;

        switch (keyCode) {
          case 9:
            stopEvent = true;
            self.leave(e);
            var method = e.shiftKey ? 'focusPrev' : 'focusNext';
            focusManager[method]();
            break;
          case 38: // Up arrow
            if (document.activeElement === self.$first[0]) {
              stopEvent = true;
              focusManager.moveFocus(self.$last);
            }
            break;
          case 40: // Down arrow
            if (document.activeElement === self.$last[0]) {
              stopEvent = true;
              focusManager.moveFocus(self.$first);
            }
            break;
        }

        if (stopEvent) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    }
  });
});

/* START_TEMPLATE */
BV.define('hbs!contentFilterSelect',['hbs','vendor/handlebars/runtime', 'template/helpers/view', 'template/helpers/renderIcon', 'template/helpers/extmsg'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.isMobile, {hash:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " "
    + " <label for=\"bv-dropdown-select-"
    + escapeExpression(((stack1 = ((stack1 = depth0._bview),stack1 == null || stack1 === false ? stack1 : stack1.viewId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-off-screen\"> ";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "offscreen_filter_label", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "offscreen_filter_label", depth0.msgpack, depth0, options)))
    + " ";
  if (stack2 = helpers.label) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.label; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " </label> <select id=\"bv-dropdown-select-"
    + escapeExpression(((stack1 = ((stack1 = depth0._bview),stack1 == null || stack1 === false ? stack1 : stack1.viewId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-content-filter-select-element bv-focusable\" data-bv-filter-for=\"";
  if (stack2 = helpers.label) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.label; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> "
    + " <option value=\"\">";
  if (stack2 = helpers.label) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.label; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</option> ";
  stack2 = helpers.each.call(depth0, depth0.options, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </select> ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <option value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.label) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option> ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += " <div class=\"bv-dropdown\" data-bv-filter-for=\"";
  if (stack1 = helpers.label) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> <div class=\"bv-dropdown-target\" role=\"menu\"> <button type=\"button\" class=\"bv-focusable\" role=\"menuitem\" aria-haspopup=\"true\" aria-expanded=\"false\"> ";
  options = {hash:{
    'classList': ("bv-dropdown-arrow"),
    'ariaHidden': ("true"),
    'role': ("presentation")
  },inverse:self.noop,fn:self.program(6, program6, data)};
  stack2 = ((stack1 = helpers.renderIcon),stack1 ? stack1.call(depth0, "bv-sprite-down-arrow-dark", options) : helperMissing.call(depth0, "renderIcon", "bv-sprite-down-arrow-dark", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <span class=\"bv-dropdown-title\">";
  if (stack2 = helpers.label) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.label; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span> <span class=\"bv-off-screen\">";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "offscreen_sort_arrow", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "offscreen_sort_arrow", depth0.msgpack, depth0, options)))
    + "</span> </button> </div> <label for=\"bv-dropdown-select-"
    + escapeExpression(((stack1 = ((stack1 = depth0._bview),stack1 == null || stack1 === false ? stack1 : stack1.viewId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-off-screen\"> ";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.extmsg),stack1 ? stack1.call(depth0, "offscreen_filter_label", depth0.msgpack, depth0, options) : helperMissing.call(depth0, "extmsg", "offscreen_filter_label", depth0.msgpack, depth0, options)))
    + " ";
  if (stack2 = helpers.label) { stack2 = stack2.call(depth0, {hash:{}}); }
  else { stack2 = depth0.label; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " </label> <select id=\"bv-dropdown-select-"
    + escapeExpression(((stack1 = ((stack1 = depth0._bview),stack1 == null || stack1 === false ? stack1 : stack1.viewId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"bv-select-cleanslate bv-dropdown-select\"> ";
  stack2 = helpers.each.call(depth0, depth0.options, {hash:{},inverse:self.noop,fn:self.program(8, program8, data)});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " </select> </div> ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return " &#x25BC; ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <option value=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> ";
  if (stack1 = helpers.label) { stack1 = stack1.call(depth0, {hash:{}}); }
  else { stack1 = depth0.label; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </option> ";
  return buffer;
  }

  buffer += " ";
  options = {hash:{
    'tag': ("div"),
    'classList': ("content-filter-select")
  },inverse:self.noop,fn:self.program(1, program1, data)};
  stack2 = ((stack1 = helpers.view),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "view", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('contentFilterSelect', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
BV.define('bv/c2013/view/contentFilterSelect',[
  'jquery',
  'underscore',
  'bv/ui-core/bselectview',
  'bv/c2013/view/contentFilterDropdown',
  'bv/util/focusManager',
  'hbs!contentFilterSelect'
], function ($, _, BSelectView, FilterDropdownView, focusManager, tmplSelect) {
  // FilterSelectView:
  // A view that, when hovered over, shows options.
  return BSelectView.extend({
    name: 'FilterSelect',

    events: {
      'change select': 'change',
      'click button.bv-focusable': 'enter'
    },

    TargetView: FilterDropdownView,

    template: tmplSelect,

    change: function (event) {
      var $elem = $(event.target);
      var val = $elem.val();
      var option;
      var $filterSelectButton;

      if (val === '') { return; }

      option = this.model.getOption(val);
      option.toggleEnabled();

      // Reset the dropdown so that it shows the name of the filter.
      $elem.val('');

      $filterSelectButton = $elem.parent().find('.bv-dropdown-target button.bv-focusable').eq(0);
      // Leave focus on filter select button.
      if ($filterSelectButton.length) {
        setTimeout(function () {
          focusManager.moveFocus($filterSelectButton);
        }, 0);
      };
    },

    leave: function () {
      var $targetEl = this.$targetEl.find('button');
      if ($targetEl) {
        $targetEl.removeAttr('aria-owns');
        $targetEl.removeAttr('aria-controls');
      }
      return BSelectView.prototype.leave.apply(this, arguments);
    },

    enter: function () {
      // If we're on mobile, do nothing, because the native SELECT element is
      // shown instead.
      var $targetEl = this.$targetEl.find('button');
      var label = this.$targetEl.find('.bv-dropdown').attr('data-bv-filter-for');
      if ($targetEl) {
        $targetEl.attr('aria-owns', 'bv-content-filter-dropdown-' + label);
        $targetEl.attr('aria-controls', 'bv-content-filter-dropdown-' + label);
      }
      if (this.model.get('isMobile')) { return; }
      return BSelectView.prototype.enter.apply(this, arguments);
    },

    setupKeyboardNavigation: function ($targetEl) {
      var self = this;
      var keysToHandle = {
        9: true, // Tab
        13: true, // Enter
        27: true, // Escape
        32: true, // Space bar
        38: true, // Up arrow
        40: true // Down arrow
      };

      $targetEl = $targetEl || this.$targetEl;

      $targetEl.off('keydown.FilterSelectView').on('keydown.FilterSelectView', function (e) {
        var keyCode = e.keyCode;
        var targetView;
        var targetViewRendered;
        var stopEvent = false;
        var method;
        var timer;

        if (!keysToHandle[keyCode]) { return; }

        targetView = self.targetView;
        targetViewRendered = targetView ? targetView.rendered : false;

        function enterView (ev) {
          self.targetViewOptions = _.extend({}, self.targetViewOptions, { startDelay: 0 });
          self.enter(ev);
          targetView = self.targetView;
        }

        function leaveView (ev) {
          self.leave(ev);
          self.deregisterFocusableLayer();
        }

        switch (keyCode) {
          // Intentional fall-through, treat spacebar and enter
          // as equivalent actions
          case 9: // Tab
            stopEvent = true;
            if (targetViewRendered) {
              leaveView(e);
            }
            method = e.shiftKey ? 'focusPrev' : 'focusNext';
            focusManager[method]();
            break;
          case 13: // Enter
          case 32: // Space bar
            stopEvent = true;
            if (targetViewRendered) {
              leaveView(e);
            }
            else {
              enterView(e);
            }
            break;
          case 27: // Escape
            stopEvent = true;
            leaveView(e);
            break;
          case 40: // Down arrow
            stopEvent = true;
            if (!targetViewRendered) {
              enterView(e);
            }
            // It's very gross to be this explicit, but it's the most reasonable approach right now.
            // It's not in the doc and it's hard to tell *when* it goes into the doc.
            // There isn't a clean event that I can find.
            timer = setInterval(function () {
              if ($.contains(document, targetView.$first[0])) {
                self.moveFocus(targetView.$first);
                clearInterval(timer);
              }
            }, 20);
            break;
        }

        if (stopEvent) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    },

    // Overridden because we don't want the dropdown view to change our text
    // content.
    setText: $.noop

  });
});

/* START_TEMPLATE */
BV.define('hbs!contentFilterControls',['hbs','vendor/handlebars/runtime', 'template/helpers/view', 'template/helpers/subviews'], function(hbs, Handlebars){ 
var t = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += " <div class=\"bv-filters ";
  stack1 = helpers.unless.call(depth0, depth0.expanded, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" role=\"menubar\"> ";
  options = {hash:{}};
  buffer += escapeExpression(((stack1 = helpers.subviews),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "subviews", depth0, options)))
    + " </div> ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "bv-hidden";
  }

  options = {hash:{
    'tag': ("div"),
    'classList': ("filter-controls")
  },inverse:self.noop,fn:self.program(1, program1, data)};
  stack2 = ((stack1 = helpers.view),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "view", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " ";
  return buffer;
  });
Handlebars.registerPartial('contentFilterControls', t);
t.deps = [];
t.tplMountedViews = [];
return t;
});
/* END_TEMPLATE */
;
BV.define('bv/c2013/view/contentFilterControls',[
  'framework/bview',
  'bv/ui-core/focusableview',
  'bv/c2013/view/contentFilterSelect',
  'underscore',
  'hbs!contentFilterControls',
  'mf!bv/c2013/messages/contentFilter'
],
function (
  BView,
  FocusableView,
  FilterSelectView,
  _,
  tmplControls,
  msgPack
) {
  // FilterControlsView:
  // A view that shows the above dropdown/option controls so that a user can
  // add filters to content.
  //
  var FilterControlsView = BView.extend({
    name: 'FilterControls',

    events: {},

    template: tmplControls,

    msgpacks: [msgPack],

    init: function () {
      this.listenTo(this.model, {
        'change:expanded': this.toggleExpandFilter
      });
    },

    // Once we get data and know what our filters will be, we can create
    // views for them.
    createFilterViews: function () {
      var filterModels = this.model.filters;

      if (!this.views) { this.views = []; }

      // Each filter needs a corresponding FilterSelectView.
      _(filterModels).each(function (filterModel) {
        var view = new FilterSelectView({
          parent: this,
          model: filterModel
        });

        this.views.push(view);
      }, this);

      return this.views;
    },

    // The user clicked on the toggle button.
    toggleExpandFilter: function (model, expanded) {
      var $viewEl = this.$viewEl;

      // This function sets the max-width of each filter.
      // Filters with long text will have ellipsis.
      function setMaxWidth (reset) {
        var $filterWrapper = $viewEl.find('.bv-filters');
        var $filter = $viewEl.find('.bv-filters > .bv-content-filter-select');
        var maxWidth;

        if (!reset) {
          // Temporarily set width to 1px to calculate width of parent container.
          $filter.css('width', 1);

          maxWidth = $filterWrapper.width();
          $filter
            .css('width', 'auto')
            .css('max-width', maxWidth);
        }
        else {
          $filter.css('max-width', 'none');
        }
      }

      if (!$viewEl || !$viewEl.length) { return; }

      $viewEl.toggleClass('bv-hidden', !expanded);
      $viewEl.toggleClass('bv-focusable', expanded);

      if (expanded) {
        setMaxWidth();

        $viewEl.attr('tabindex', -1);
        // Rescan so the newly-shown container gets put in the proper place
        // in the focus order.
        this.rescanFocusLayer();
        // Leave the focus on contentFilterButton
        // this.moveFocus($viewEl);
      }
      else {
        setMaxWidth(true);

        $viewEl.removeAttr('tabindex');
        this.removeFocusables($viewEl);
      }
    }
  });

  FilterControlsView = FilterControlsView.extend(FocusableView);

  return FilterControlsView;
});

BV.define('secondary',[
  'bv/ugc/submission',
  'bv/ugc/authUser',
  'bv/ugc/unsubscribeUser',
  'bv/ugc/container',
  'bv/ugc/deeplink',
  'bv/ui-core/modestbox',
  'bv/c2013/_extensions/collection/contentItemCollectionExt',
  'bv/c2013/_extensions/view/contentItemExt',
  'bv/c2013/_extensions/model/searchContentListExt',
  'bv/c2013/_extensions/view/searchContentListExt',
  'bv/c2013/_extensions/model/localSocialSharingExt',
  'bv/c2013/_extensions/view/localSocialSharingExt',
  'bv/c2013/view/contentFilterActiveFilters',
  'bv/c2013/view/contentFilterControls'
], function (
  Submission,
  AuthUser,
  UnsubscribeUser,
  Container,
  Deeplink,
  ModestBox,
  ContentItemCollectionExt,
  ContentItemViewExt,
  SearchContentListExt,
  SearchContentListViewExt,
  LocalSocialSharingExt,
  LocalSocialSharingViewExt,
  ActiveFiltersView,
  FilterControlsView
) {
  return {
    Submission : Submission,
    AuthUser : AuthUser,
    UnsubscribeUser: UnsubscribeUser,
    Container : Container,
    Deeplink : Deeplink,
    ModestBox : ModestBox,
    ContentItemCollectionExt : {
      collection : ContentItemCollectionExt
    },
    ContentItemExt : {
      view : ContentItemViewExt
    },
    SearchContentListExt : {
      model : SearchContentListExt,
      view : SearchContentListViewExt
    },
    LocalSocialSharingExt : {
      model : LocalSocialSharingExt,
      view : LocalSocialSharingViewExt
    },
    ActiveFiltersView : ActiveFiltersView,
    FilterControlsView : FilterControlsView
  };
});
